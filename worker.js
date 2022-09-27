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
    'Proxy': 'https://proxies.do/api',
    'Webhooks': 'https://webhooks.do/api',
  },
  primitives: {
    'APIs': 'https://apis.do/api',
    'Triggers': 'https://triggers.do/api',
    'Searches': 'https://searches.do/api',
    'Actions': 'https://actions.do/api',
  },
  saas: {
    'Analytics': 'https://analytics.do/api',
    'Funnels': 'https://funnels.do/api',
    'Subscriptions': 'https://subscriptions.do/api',
    'Users': 'https://users.do/api',
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
  pubsub: {
    'PubSub': 'https://pubsub.do/api',
    'Triggers': 'https://triggers.do/api',
  },
  iot: {
    'MQTT': 'https://mqtt.do/api',
  },
  data: {
    'Database': 'https://database.do/api',
    'Bucket': 'https://database.do/api',
  },
  cicd: {
    'Builds': 'https://builds.do/api',
  },
  web: {
    'Caches': 'https://caches.do/api',
    'Fetch': 'https://fetch.do/api',
    'Scraper': 'https://scraper.do/api',
  },
  durableObjects: {
    'Alarms': 'https://alarms.do/api',
    'Backup': 'https://backup.do/api',
    'Restore': 'https://restore.do/api',
  },
  analytics: {
    'Analytics': 'https://analytics.do/api',
  },
  communication: {
    'Alerts': 'https://alerts.do/api',
    'Discord': 'https://discord.do/api',
    'Email': 'https://emails.do/api',
    'Text': 'https://texts.do/api',
    'Slack': 'https://slack.do/api',
  },
  schema: {
    'Schema Generation': 'https://schema.do/api',
    'GraphQL Schema': 'https://gql.do/api',
  },
  personas: {
    'Builders': 'https://builders.do/api',
  },
  pipes: {
    'Chains': 'https://chains.do/api',
    'Pipes': 'https://pipes.do/api',
  },
  ai: {
    'Artificial Intelligences': 'https://ais.do/api',
    'GPT-3 Templates': 'https://gpt.do/api',
    'GPT-3 Codex': 'https://codex.do/api',
  },
  code: {
    'Abstract Syntax Tree Generation': 'https://syntax.do/api',
    'Algorithm Library': 'https://algorithms.do/api',
    'ESBuild Transpilation': 'https://esbuild.do/api',
  },
  testing: {
    'API Testing': 'https://api.qa/api',
    'API Status Page': 'https://api.status.page.as/api',
    'Performance Benchmarking': 'https://benchmark.do/api',
    'Performance Testing': 'https://perf.as/api',
    'Status Page': 'https://status.page.as/api',
  },
  cloudflare: {
    'API': 'https://api.cf/api',
    'D1': 'https://d1.cf/api',
    'Durable Objects': 'https://do.cf/api',
    'DO Alarms': 'https://alarms.cf/api',
    'KV': 'https://kv.cf/api',
    'Service Bindings': 'https://service.do/api',
    'Workers': 'https://workers.cf/api',
    'Workers for Platforms': 'https://workers.do/api',
  },
  integrations: {
    'Airtable Base API': 'https://base.do/api',
    'Zapier Zap Generation': 'https://zap.do/api',
  },
  marketing: {
    'API Landing Pages': 'https://api.page/api',
    'Blogs': 'https://blogs.do/api',
    'Chat Boxes': 'https://chat.boxes.do/api',
  },
  commerce: {
    'ACH Transfers': 'https://ach.do/api',
    'Bill of Sale': 'https://bos.do/api',
    'Checkout': 'https://checkout.do/api',
    'Subscriptions': 'https://subscriptions.do/api',
  },
  workflows: {
    'Workflows': 'https://workflows.do/api',
  },
  automotive: {
    'Automotive Data': 'https://auto.dev/api',
    'Auto Commerce APIs': 'https://driv.ly/api',
  },
  jobs: {
    'Job Application': 'https://career.do/api',
  },
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    
    return new Response(JSON.stringify({ api, apis, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

