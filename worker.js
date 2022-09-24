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
  repo: 'https://github.com/drivly/apis.do',
}

const categories = {
   
  
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    
    return new Response(JSON.stringify({ api, time, requestId, categories, pathSegments, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

