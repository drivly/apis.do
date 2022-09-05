import { Router } from 'itty-router'
import { json, withParams } from 'itty-router-extras'

const router = Router()

const api = {
  icon: '🚀',
  name: 'apis.do',
  description: 'Cloudflare API',
  url: 'https://apis.do/api',
  typeOf: 'https://apis.do/integrations',
  endpoints: {
    primitives: 'https://apis.do/primitives',
    pipes: 'https://apis.do/pipes',
    integrations: 'https://apis.do/integrations',
  },
  site: 'https://apis.do',
  repo: 'https://github.com/drivly/api.cf',
}

router.all('*', async (req, env, ctx) => {
  req.user = await env.CTX.fetch(req).then(res => res.json())
})

router.get('/api')


export default {
  fetch: router.handle 
}
