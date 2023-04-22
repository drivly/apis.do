import { Router } from 'itty-router'
import { pathToRegexp } from 'path-to-regexp'
import { Toucan } from 'toucan-js'

const router = Router()

var Instance

export class API {
  constructor (metadata, options) {
    Instance = this
    this.metadata = metadata || {}
    this.options = options || {}

    this.sentryDsn = this.options.sentryDsn || null
    this.examples = this.options.examples

    this.routes = {}

    this.hostname = '' // Filled in after we handle our first request
    this.env = {}
    this.ctx = {}
  }

  createRoute(method, path, ...handlers) {
    // Check if the last handler is an object. If so, this is our documentation object.

    let documentation = {}

    if (typeof handlers[handlers.length - 1] === 'object') {
      documentation = handlers.pop()
    }
  
    this.routes[`${method} ${path}`] = documentation
    
    let keys = []
    const reg = pathToRegexp(path, keys)

    // Unpack the documentation object from { param: 'type' } to { param: { type: 'type', required: true|false } }

    for (let param of Object.keys(documentation.parameters || {})) {
      if (typeof documentation.parameters[param] === 'string') {
        
        const required = keys.find(key => key.name === param).modifier != '?'
        
        documentation.parameters[param] = {
          type: documentation.parameters[param],
          required
        }
      }
    }
    
    // Find the example that this route is describing
    if (this.examples) {
      // Examples is an object such as { createNewUser: '/users/create' }
      for (let example of Object.keys(this.examples)) {
        if (reg.test(this.examples[example])) {
          this.routes[`${method} ${path}`].example = `https://<hostname>${this.examples[example]}`
        }
      }
    }

    return router[method.toLowerCase()](path, ...handlers)
  }

  get() {
    return this.createRoute('GET', ...arguments)
  }

  async debug() {
    // Logs the current state of the API to the console.
    // For example [Sentry] Active or [Sentry] Inactive - Missing ENV variable or DSN string

    const checks = [
      {
        name: 'Sentry',
        check: () => this.sentryDsn || env.SENTRY_DSN,
        message: 'Active',
        error: 'Inactive - Missing ENV variable or DSN string'
      }
    ]

    for (let check of checks) {
      if (check.check()) {
        console.log(`[${check.name}] ${check.message}`)
      } else {
        console.log(`[${check.name}] ${check.error}`)
      }
    }
  }

  async fetch(req, env, ctx) {
    // This is a hack to get around the fact that `this` is not available in the global scope.
    return Instance.handle.call(Instance, req, env, ctx)
  }

  async handle(req, env, ctx) {
    const { hostname, pathname } = new URL(req.url)

    this.hostname = hostname
    this.env = env
    this.ctx = ctx

    const sentryDsn = this.sentryDsn || env.SENTRY_DSN

    let sentry = sentryDsn ?
      new Toucan({
        dsn: sentryDsn,
        context: ctx,
        request: req,
      }).captureException : () => {}

    try {
      const authReq = new Request('https://ctx.vin/api', {
        headers: {
          cookie: req.headers.get('cookie'),
          authorization: req.headers.get('authorization')
        }
      })
    
      if (!env.CTX) console.warn('[CTX] env.CTX is undefined, using fetch to ctx.vin.')

      const contextVin = env.CTX != undefined ? await env.CTX.fetch(authReq).then(x=>x.json()) : await fetch(authReq).then(res => res.json())

      req.user = contextVin.user
      req.ctx = contextVin
      req.env = env

      const user = req.user

      req.waitUntil = ctx.waitUntil
    
      req.metadata = this.metadata

      if (this.options.requireAuth) {
        if (!user) {
          return json({
            api: this.metadata,
            data: {
              error: 'You must be logged in to access this API.',
              link: `https://${hostname}/login`
            },
            user,
          })
        }
      }

      if (pathname == '/api') {
        const payload = JSON.stringify({
          api: this.metadata,
          endpoints: this.routes,
          examples: this.examples,
          user
        }).replaceAll('<hostname>', hostname)

        return new Response(payload, {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          }
        })
      }

      const res = await router.handle(req, env, ctx)

      if (res instanceof Response) {
        return res
      }

      let resBody

      if (res.data) {
        // This indicates that this response
        // has its own data prop.
        resBody = {
          api: this.metadata,
          ...res,
          user
        }
      } else {
        resBody = {
          api: this.metadata,
          data: res,
          user
        }
      }

      if (res.links) {
        // Modify each link to include the hostname
        // Links is an object, so we can't use map

        // Link could be a nested object, so we need to recursively edit the links
        const editLinks = (links) => {
          for (let link in links) {
            if (typeof links[link] === 'object') {
              editLinks(links[link])
            } else {
              if (!links[link].startsWith('http')) {
                links[link] = `https://${hostname}${pathname}?${links[link]}`
              } else {
                links[link] = links[link]
              }
            }
          }
        }

        editLinks(res.links)
      }

      return new Response(
        JSON.stringify(resBody, null, 2)
          .replaceAll('<hostname>', hostname)
        ,
        {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          }
        }
      )
    } catch (e) {
      sentry(e)

      return new Response(
        JSON.stringify({
          api: this.metadata,
          data: {
            error: e.message,
            stack: e.stack
          },
          user: req.user || {}
        }, null, 2),
        {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          }
        }
      )
    }
  }
}

export const json=(e,t)=>new Response(JSON.stringify(e,null,2),{headers:{"content-type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With","Cache-Control":"no-cache, no-store, must-revalidate"},...t})

export const requiresAuth = async (req) => {
  // Middleware version of our auth system
  const { hostname } = new URL(req.url)

  if (!req.user.authenticated) {
    return json({
      api: req.metadata,
      data: {
        error: 'You must be logged in to access this API.',
        link: `https://${hostname}/login`
      },
      user: req.user,
    }, {
      status: 403
    })
  }
}

export const camelCase = (str) => {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '')
  })
}

export const snakeCase = (str) => {
  return str.replace(/([A-Z])/g, ($1) => {
    return `_${$1.toLowerCase()}`
  })
}

export const pascalCase = (str) => {
  return camelCase(str).replace(/^[a-z]/, (val) => val.toUpperCase())
}

export const kebabCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export const modifyQuery = (url, params) => {
  // This function is used to modify the query string of a URL.
  // Replace the query string with the new params.
  const { searchParams } = new URL(url)

  for (const [ key, value ] of Object.entries(params)) {
    searchParams.set(key, value)
  }

  return searchParams.toString()
}

export const modifyQueryMultiple = (url, key, obj) => {
  // Returns a URL with a query string that has been modified
  // Obj is a key value pair of name: value. But we need to
  // Return another object like { name: '?key=value' }

  const { searchParams } = new URL(url)

  const newParams = Object.entries(obj).reduce((acc, [ name, value ]) => {
    acc[name] = modifyQuery(url, { [key]: value })
    return acc
  }, {})

  return newParams
}

export const schemaGen = (obj) => {
  // Returns an OpenAPI schema object
  // Recursively generates schema for nested objects

  const schema = {}

  for (const key in obj) {
    const value = obj[key]

    if (typeof value === 'string') {
      schema[key] = { type: 'string' }
    } else if (typeof value === 'number') {
      schema[key] = { type: 'number' }
    } else if (typeof value === 'boolean') {
      schema[key] = { type: 'boolean' }
    } else if (Array.isArray(value)) {
      schema[key] = {
        type: 'array',
        items: schemaGen(value[0])
      }
    } else if (typeof value === 'object') {
      schema[key] = {
        type: 'object',
        properties: schemaGen(value)
      }
    }
  }

  return schema
}