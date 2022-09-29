export * as apis from './apis'

export const getAPI = (req, opts) => {
  const { origin, hostname, pathname } = new URL(req.url)
  const domain = opts?.api ?? hostname.split('.').slice(-2).join('.')
  const knownAPI = apis[domain]
  const endpoints = Object.fromEntries(Object.entries(knownAPI?.endpoints)
                      .map(([name, endpoint]) => ([name, endpoint.startsWith('https://') ? endpoint : origin + endpoint])))
  const examples = Object.fromEntries(Object.entries(knownAPI?.endpoints)
                      .map(([name, endpoint]) => ([name, endpoint.startsWith('https://') ? endpoint : origin + endpoint])))
  const gettingStarted = knownAPI?.gettingStarted ?? [
    `If you don't already have a JSON Viewer Browser Extension, get that first:`,
    `https://extensions.do`,
  ]
  const api = {
    icon: knownAPI?.icon ?? opts?.icon ?? '🚀',
    name: opts?.name ?? domain,
    description: knownAPI?.description ?? opts?.description ?? 'Hypermedia-driven API Directory',
    url: origin + '/api',
    type: 'https://apis.do/' + (knownAPI?.type ?? opts?.type ?? 'api'),
    endpoints,
    site: origin,
    login: opts?.login ?? opts?.noLogin ? undefined : origin + '/login',
    signup: opts?.signup ?? opts?.noSignup ? undefined : origin + '/signup',
    subscribe: opts?.subscribe ?? opts?.noSubscribe ? undefined : origin + '/subscribe',
    repo: opts?.repo ?? 'https://github.com/drivly/' + domain,
  }
  return { api, gettingStarted, examples }
}

export const fetchJSON = (...args) => fetch(...args).then(res => res.json()).catch(({name,message}) => ({ error: {name,message}}))
export const json = data  => new Response(JSON.stringify(data, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
export const err = ({name,message,stack}) => ({ error: {name,message,stack}})

export const api = func => ({
  fetch: async (req, env) => {
    let api = getAPI(req)
    let result = await func(req).catch(err)
    return {api, result}
  }
})

export const categories = Object.entries(apis).reduce((acc, [name,item]) => {
  acc[item.type] = acc[item.type] || []
  acc[item.type].push({name,...item})
}, {})

// https://github.com/kwhitley/itty-router-extras

export const Router = (options = {}) => {
  const { stack = false } = options

  return new Proxy(BaseRouter(options), {
    get: (obj, prop) => (...args) =>
        prop === 'handle'
        ? obj[prop](...args).catch(err => error(
            err.status || 500,
            {
              status: err.status || 500,
              error: err.message,
              stack: stack && err.stack || undefined
            },
          ))
        : obj[prop](...args)
  })
}


// https://github.com/kwhitley/itty-router

function BaseRouter({ base = '', routes = [] } = {}) {
  return {
    __proto__: new Proxy({}, {
      get: (target, prop, receiver) => (route, ...handlers) =>
        routes.push([
          prop.toUpperCase(),
          RegExp(`^${(base + route)
            .replace(/(\/?)\*/g, '($1.*)?')                             // trailing wildcard
            .replace(/(\/$)|((?<=\/)\/)/, '')                           // remove trailing slash or double slash from joins
            .replace(/:(\w+)(\?)?(\.)?/g, '$2(?<$1>[^/]+)$2$3')         // named params
            .replace(/\.(?=[\w(])/, '\\.')                              // dot in path
            .replace(/\)\.\?\(([^\[]+)\[\^/g, '?)\\.?($1(?<=\\.)[^\\.') // optional image format
          }/*$`),
          handlers,
        ]) && receiver
    }),
    routes,
    async handle (request, ...args) {
      let response, match, url = new URL(request.url)
      request.query = Object.fromEntries(url.searchParams)
      for (let [method, route, handlers] of routes) {
        if ((method === request.method || method === 'ALL') && (match = url.pathname.match(route))) {
          request.params = match.groups
          for (let handler of handlers) {
            if ((response = await handler(request.proxy || request, ...args)) !== undefined) return response
          }
        }
      }
    }
  }
}
