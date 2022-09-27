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

const apis = {
  core: {
    'APIs': 'https://apis.do/api',
    'API Context': 'https://ctx.do/api',
    'API Directory': 'https://apis.directory/api',
    'API Management': 'https://api.mgmt.do/api',
    'API Testing': 'https://api.qa/api',
    'Webhooks': 'https://webhooks.do/api',
  },
  security: {
    'API Keys': 'https://apikeys.do/api',
    'JWT Tokens': 'https://jwt.do/api',
    'OAuth 2.0': 'https://oauth.do/api',
  },
  transformation: {
    'JSON Path': 'https://camel.case.do/api',
    'Lodash': 'https://lodash.do/api',
    'Pluck': 'https://pluck.do/api',
  },
  utilities: {
    'camelCaseKeys': 'https://camel.case.do/api',
    'kebab-case-keys': 'https://kebab.case.do/api',
    'snake_case_keys': 'https://snake.case.do/api',
    'Title Case Keys': 'https://title.case.do/api',
  },
  formats: {
    'CSV Conversions': 'https://csv.do/api',
    'Markdown Conversions': 'https://markdown.do/api',
    'JavaScript Conversions': 'https://markdown.do/api',
    'TypeScript Conversions': 'https://markdown.do/api',
    'YAML Conversions': 'https://yaml.do/api',
    ;
  },
  state: {
    'Finite State Machines': 'https://state.do/api',
  },
  data: {
    'Database': 'https://database.do/api',
    'Bucket': 'https://database.do/api',
  },
  communication: {
    'Discord': 'https://discord.do/api',
    'Email': 'https://emails.do/api',
    'Text': 'https://texts.do/api',
    'Slack': 'https://slack.do/api',
  },
  schema: {
    'Schema Generation': 'https://schema.do/api',
  },
  code: {
    'Abstract Syntax Tree Generation': 'https://syntax.do/api',
    'ESBuild Transpilation': 'https://esbuild.do/api',
  },
  qa: {
    'API Testing': 'https://api.qa',
    'API Status Page': 'https://api.status.page.as',
    'Status Page': 'https://status.page.as',
  },
  cloudflare: {
    'API': 'https://api.cf/api',
    'D1': 'https://d1.cf/api',
    'Durable Objects': 'https://do.cf/api',
    'KV': 'https://kv.cf/api',
    'Service Bindings': 'https://service.do/api',
    'Workers': 'https://workers.cf/api',
    'Workers for Platforms': 'https://workers.do/api',
  },
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    
    return new Response(JSON.stringify({ api, apis, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

