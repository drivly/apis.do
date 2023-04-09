import { Router } from 'itty-router'
import { pathToRegexp } from 'path-to-regexp'
import { Toucan } from 'toucan-js'


const router = Router()

export class API {
  constructor (metadata, options) {
    this.metadata = { ...metadata }
    this.options = { ...options || {} }

    this.sentryDsn = this?.options?.sentryDsn

    this.examples = this.options.examples

    this.routes = {}
  }

  get() {
    const [ path, ...handlers ] = arguments
    this.routes[`GET ${path}`] = handlers
    return router.get(...arguments)
  }

  post() {
    const [ path, ...handlers ] = arguments
    this.routes[`POST ${path}`] = handlers
    return router.post(...arguments)
  }

  put() {
    const [ path, ...handlers ] = arguments
    this.routes[`PUT ${path}`] = handlers
    return router.put(...arguments)
  }

  delete() {
    const [ path, ...handlers ] = arguments
    this.routes[`DELETE ${path}`] = handlers
    return router.delete(...arguments)
  }

  options() {
    const [ path, ...handlers ] = arguments
    this.routes[`OPTIONS ${path}`] = handlers
    return router.options(...arguments)
  }

  async fetch(req, env, ctx) {
    const { hostname } = new URL(req.url)

    console.log(this.options)

    const sentryDsn = this.sentryDsn || env.SENTRY_DSN

    let sentry = sentryDsn ?
      new Toucan({
        dsn: sentryDsn,
        context: ctx,
        request: req,
      }).captureException : () => {}

    try {
      const authReq = new Request('https://ctx.do/api', {
        headers: {
          cookie: req.headers.get('cookie'),
          authorization: req.headers.get('authorization')
        }
      })
    
      const {
        user
      } = await fetch(authReq).then(res => res.json())

      this.metadata.endpoints = Object.keys(this.routes)
    
      req.user = user
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

      return new Response(
        JSON.stringify(resBody, null, 2),
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
          user
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

