export const api = {
  icon: '🚀',
  name: 'apis.do',
  description: 'Hypermedia-driven API Directory',
  url: 'https://apis.do/api',
  type: 'https://apis.do/api',
  endpoints: {
    categories: 'https://apis.do/api',
    api: 'https://apis.do/:type',
  },
  site: 'https://apis.do',
  login: 'https://apis.do/login',
  signup: 'https://apis.do/signup',
  subscribe: 'https://apis.do/subscribe',
  repo: 'https://github.com/drivly/apis.do',
}

const categories = {
  api: {
    'APIs': 'https://apis.do',
    'API Context': 'https://ctx.do',
    'API Directory': 'https://apis.directory',
    'API Management': 'https://api.mgmt.do',
    'API Testing': 'https://api.qa',
  },
  security: {
    'API Keys': 'https://apikeys.do',
    'JWT Tokens': 'https://oauth.do',
    'OAuth 2.0': 'https://oauth.do',
  },
  qa: {
    'API Testing': 'https://api.qa',
    'API Status Page': 'https://api.status.page.as',
    'Status Page': 'https://status.page.as',
  },
  cloudflare: {
    'API': 'https://api.cf',
    'Durable Objects': 'https://api.cf',
    'KV': 'https://kv.cf',
    'Workers': 'https://workers.cf',
    'Workers for Platforms': 'https://workers.do',
  }
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    
    return new Response(JSON.stringify({ api, categories, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

