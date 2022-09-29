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
export const json = data  => new Response(JSON.stringify({user, redirect, body, data}, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
export const err = ({name,message,stack}) => ({ error: {name,message,stack}})

export const api = func => ({
  fetch: async (req, env) => {
    let api = getAPI(req)
    let result = await func(req).catch(err)
    return {api, result}
  }
})

export const categories = apis.reduce((acc, item) => {
  acc[item.type] = acc[item.type] || []
  acc[item.type].push(item)
}, {})

export const apis = {
  'apis.do': {
    icon: '🚀',
    type: 'core',
    description: 'Hypermedia-driven API Directory',
    endpoints: {
      listCategories: '/api',
      getCategory: '/:type',
      search: '/search/:term',
    },
    examples: {
      getUtilities: '/utilities',
      searchForData: '/search/data',
    },
  },
  'esbuild.do': {
    icon: '⚡️',
    type: 'code',
    description: 'ESBuild as a Service',
    endpoints: {
      build: '/:url',
    },
    examples: {
      buildPackage: 'https://esbuild.do/pkg.do/lodash',
      buildGeneratedWorker: 'https://esbuild.do/worker.do/cube/x=5/x^3',
      buildGist: 'https://gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/0c8ef49c00d3614b04c1228f279c556c96ef14b8/index.js',
    }
  },
  'gist.do': {
    icon: '🛠',
    type: 'code',
    description: 'Abstract Syntax Tree Parser',
    endpoints: {
      deployWorker: '/:gist',
      invokeWorker: 'https://gist.gist.do',
    },
    examples: {
      publish: 'https://gist.do/28a6b4bfde485b704a2fcc9b6c874e79',
      invokeWorker: 'https://28a6b4bfde485b704a2fcc9b6c874e79.gist.do',
      publishAPI: 'https://gist.do/api/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79',
      publishWorker: 'https://gist.do/worker/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79',
    }
  },
  'pkg.do': {
    icon: '📦',
    type: 'code',
    description: 'Simple Package Bundle CDN',
    endpoints: {
      getPackage: '/:package',
    },
    examples: {
      getAPIs: '/apis.do',
      getLodash: '/lodash-es',
      getVersion: '/lodash-es@4.17.21',
    },
  },
  'syntax.do': {
    icon: '⚡️',
    type: 'code',
    description: 'Abstract Syntax Tree Parser',
    endpoints: {
      parseScript: '/:code',
      parseModule: '/:url',
    },
    examples: {
      parseScript: 'https://syntax.do/x=x+3',
      parseGist: 'https://syntax.do/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js',
    },
  },
  'worker.do': {
    icon: '👌',
    type: 'code',
    description: 'Generate Worker from any JavaScriptFunction',
    endpoints: {
      buildCode: '/:name/:args/:code',
      buildFile: '/:name/:args/:url',
    },
    examples: {
      workerFromScript: 'https://worker.do/cube/number=5/5^3',
      workerFromGist: 'https://worker.do/math/number=5/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js',
    },
  },
}


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
