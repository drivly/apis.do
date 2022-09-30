// import { getAPI } from './index' 

// import apis from './apis'

export const api = {
  icon: '🚀',
  name: 'apis.do',
  description: 'Hypermedia-driven API Directory',
  url: 'https://apis.do/api',
  type: 'https://apis.do/core',
  endpoints: {
    listAllAPIs: 'https://apis.do/apis',
    listCategories: 'https://apis.do/categories',
    getCategory: 'https://apis.do/:type',
    search: 'https://apis.do/search/:term',
  },
  site: 'https://apis.do',
  login: 'https://apis.do/login',
  signup: 'https://apis.do/signup',
  subscribe: 'https://apis.do/subscribe',
  repo: 'https://github.com/drivly/apis.do',
}

export default {
  fetch: async (req, env) => {
//     const api = getAPI(req)
    const { user, origin, requestId, method, body, time, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    const [ category ] = pathSegments
//     const apis = categories[category] ?? categories
    return new Response(JSON.stringify({ api, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

