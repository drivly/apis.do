export const api = {
  icon: '🚀',
  name: 'apis.do',
  description: 'Hypermedia-driven API Directory',
  url: 'https://apis.do/api',
  type: 'https://apis.do/api',
  endpoints: {
    listCategories: 'https://apis.do/api',
    getCategory: 'https://apis.do/:type',
    search: 'https://apis.do/search/:term',
  },
  site: 'https://apis.do',
  login: 'https://apis.do/login',
  signup: 'https://apis.do/signup',
  subscribe: 'https://apis.do/subscribe',
  repo: 'https://github.com/drivly/apis.do',
}

const categories = {
  core: {
    'APIs': 'https://apis.do/api',
    'Context': 'https://ctx.do/api',
  },
  primitives: {
    'Primitives': 'https://primitives.do/api',
    'APIs': 'https://apis.do/api',
    'Triggers': 'https://triggers.do/api',
    'Searches': 'https://searches.do/api',
    'Actions': 'https://actions.do/api',
    'Entity': 'https://entity.do/api',
    'Package ': 'https://pkg.do/api',
    'Resource': 'https://resource.do/api',
    'CRUD': 'https://crud.do/api',
    'Objects': 'https://objects.do/api',
    'Queue': 'https://queue.do/api',
    'Count': 'https://count.do/api',
  },
  saas: {
    'Analytics': 'https://analytics.do/api',
    'Customers': 'https://customers.do/api',
    'Dashboard': 'https://dash.do/api',
    'Funnels': 'https://funnels.do/api',
    'Monetize': 'https://monetize.do/api',
    'Pricing': 'https://pricing.do/api',
    'Products': 'https://products.do/api',
    'Subscriptions': 'https://subscriptions.do/api',
    'Users': 'https://users.do/api',
  },
  security: {
    'API Keys': 'https://apikeys.do/api',
    'Identity': 'https://identity.do/api',
    'JWT Tokens': 'https://jwt.do/api',
    'OAuth 2.0': 'https://oauth.do/api',
  },
  transformation: {
    'JSONPath': 'https://json.path.do/api',
    'JMESPath': 'https://jmes.path.do/api',
    'Lodash': 'https://lodash.do/api',
    'Pluck': 'https://pluck.do/api',
    'XPath': 'https://x.path.do/api',
  },
  tools: {
    'Count': 'https://count.do/api',
    'Counters': 'https://counters.do/api',
    'Debug': 'https://debug.do/api',
    'Logging': 'https://logging.do/api',
  },
  utilities: {
    'Decode': 'https://decode.do/api',
    'Flatten': 'https://flatten.do/api',
    'Filter': 'https://filter.do/api',
    'Iterate': 'https://iterate.do/api',
    'camelCaseKeys': 'https://camel.case.do/api',
    'dot.case.keys': 'https://dot.case.do/api',
    'Human Case Keys': 'https://human.case.do/api',
    'kebab-case-keys': 'https://kebab.case.do/api',
    'snake_case_keys': 'https://snake.case.do/api',
    'SCREAMING_SNAKE_CASE_KEYS': 'https://screaming.snake.case.do/api',
    'TitleCaseKeys': 'https://title.case.do/api',
    'Sentence case keys': 'https://sentence.case.do/api',
  },
  formats: {
    'CSV': 'https://csv.do/api',
    'Markdown': 'https://markdown.do/api',
    'JavaScript': 'https://es6.do/api',
    'TypeScript': 'https://typescript.do/api',
    'XML': 'https://xml.do/api',
    'YAML': 'https://yaml.do/api',
  },
  convert: {
    'Convert': 'https://convert.do/api',
    'CSV to JSON': 'https://csv.do/api',
    'CSV to YAML': 'https://csv.do/api',
    'HTML to JSON': 'https://htm.do/api',
    'HTML to Markdown': 'https://markdown.do/api',
    'HTML to PDF': 'https://markdown.do/api',
    'Javascript to JSON': 'https://es6.do/api',
    'JSON to CSV': 'https://csv.do/api',
    'JSON to HTML': 'https://htm.do/api',
    'JSON to Javascript': 'https://es6.do/api',
    'JSON to PDF': 'https://pdf.do/api',
    'JSON to Markdown': 'https://markdown.do/api',
    'JSON to YAML': 'https://yaml.do/api',
    'JSON to XML': 'https://xml.do/api',
    'Markdown to JSON': 'https://markdown.do/api',
    'Markdown to HTML': 'https://markdown.do/api',
    'Text to Javascript': 'https://text.convert.do/api',
    'Text to JSON': 'https://text.convert.do/api',
    'YAML to CSV': 'https://yaml.do/api',
    'YAML to JSON': 'https://yaml.do/api',
  },
  search: {
    'Searches': 'https://searches.do/api',
    'Lookup': 'https://lookup.do/api',
  },
  crypto: {
    'Encrypt': 'https://encrypt.do/api',
    'Decrypt': 'https://decrypt.do/api',
    'Hashes': 'https://hashes.do/api',
    'HMAC': 'https://hmac.do/api',
    'Vault': 'https://vault.do/api',
  },
  state: {
    'Finite State Machines': 'https://state.do/api',
    'State Machines': 'https://state.machines.do/api',
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
    'Examples': 'https://examples.do/api',
    'Lists': 'https://lists.do/api',
    'Loader': 'https://loader.do/api',
  },
  cicd: {
    'Builds': 'https://builds.do/api',
    'Deploys': 'https://deploys.do/api',
    'Environment': 'https://env.do/api',
  },
  http: {
    'Proxy': 'https://prxy.do/api',
  },
  product: {
    'Products': 'https://products.do/api',
    'Features': 'https://features.do/api',
    'Feature Flags': 'https://feature.flags.do/api',
    'Pricing': 'https://pricing.do/api',
  },
  events: {
    'Events': 'https://events.do/api',
    'Triggers': 'https://triggers.do/api',
    'Alarms': 'https://alarms.do/api',
    'Discord': 'https://discord.do/api',
    'Email': 'https://emails.do/api',
    'Text': 'https://texts.do/api',
    'Slack': 'https://slack.do/api',
    'Timer': 'https://timer.do/api',
    'Webhooks': 'https://webhooks.do/api',
  },
  web: {
    'Caches': 'https://caches.do/api',
    'Cookies': 'https://cookies.do/api',
    'CORS': 'https://cors.do/api',
    'Downloads': 'https://downloads.do/api',
    'Embed': 'https://embed.do/api',
    'Fetch': 'https://fetch.do/api',
    'Fetcher': 'https://fetcher.do/api',
    'Files': 'https://files.do/api',
    'Flows': 'https://flows.do/api',
    'Pages': 'https://pages.do/api',
    'Scraper': 'https://scraper.do/api',
    'Rewrites': 'https://rewrites.do/api',
    'Redirects': 'https://redirects.do/api',
  },
  domains: {
    'CNAME Proxy': 'https://cname.do/api',
    'DDNS Service': 'https://ddns.do/api',
    'Hostnames': 'https://hostnames.do/api',
    'Hostname API': 'https://hostname.do/api',
    'Name Servers': 'https://nameservers.do/api',
    'Registrars': 'https://registrars.do/api',
  },
  durableObjects: {
    'Alarms': 'https://alarms.do/api',
    'Copy': 'https://copy.do/api',
    'Backup': 'https://backup.do/api',
    'Restore': 'https://restore.do/api',
    'Import': 'https://import.do/api',
    'Export': 'https://export.do/api',
    'Indexes': 'https://indexes.do/api',
    'Locations': 'https://locations.do/api',
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
  functions: {
    'Functions': 'https://functions.do/api',
    'Dynamic Function': 'https://function.do/api',
  },
  apis: {
    'API Management': 'https://api.mgmt.do/api',
    'Testing': 'https://api.qa/api',
    'GraphQL': 'https://graphql.do/api',
    'Mashup': 'https://mashup.do/api',
    'Middleware': 'https://middleware.do/api',
    'Monetize': 'https://monetize.do/api',
    'Proxy': 'https://proxies.do/api',
    'Rate Limit': 'https://rate.limit.do/api',
    'Webhooks': 'https://webhooks.do/api',
  },
  schema: {
    'Schema Generation': 'https://schema.do/api',
    'GraphQL Schema': 'https://gql.do/api',
  },
  personas: {
    'Builders': 'https://builders.do/api',
    'Employees': 'https://employees.do/api',
    'Engineers': 'https://engineers.do/api',
    'Humans': 'https://humans.do/api',
    'Programmers': 'https://programmers.do/api',
  },
  databases: {
    'Database': 'https://database.do/api',
    'GraphDL': 'https://graphdl.org/api',
    'Graph Database': 'https://graph.do/api',
    'KeyV': 'https://keyv.do/api',
    'KVDB': 'https://kvdb.do/api',
    'NoSQL': 'https://nosql.do/api',
    'Query': 'https://query.do/api',
    'Redis': 'https://redis.do/api',
    'SQLite': 'https://sqlite.do/api',
  },
  pipes: {
    'Pipes': 'https://pipes.do/api',
    'Chains': 'https://chains.do/api',
    'Commands': 'https://commands.do/api',
    'Compose': 'https://compose.do/api',
    'Console': 'https://console.do/api',
    'Grep': 'https://grep.do/api',
  },
  ai: {
    'Artificial Intelligences': 'https://ais.do/api',
    'GPT-3 Templates': 'https://gpt.do/api',
    'GPT-3 Codex': 'https://codex.do/api',
  },
  content: {
    'Content': 'https://content.do/api',
    'Markdown': 'https://markdown.do/api',
    'MDX': 'https://mdx.do/api',
  },
  code: {
    'Abstract Syntax Tree Generation': 'https://syntax.do/api',
    'Algorithm Library': 'https://algorithms.do/api',
    'ESBuild Transpilation': 'https://esbuild.do/api',
    'ES6 ': 'https://es6.do/api',
    'Eval ': 'https://eval.do/api',
    'Gist ': 'https://gist.do/api',
    'JSX ': 'https://jsx.do/api',
    'Lint ': 'https://lint.do/api',
    'Loops ': 'https://loops.do/api',
    'Modules ': 'https://modules.do/api',
    'Packages ': 'https://pkg.do/api',
    'Prettier ': 'https://prettier.do/api',
    'Props': 'https://props.do/api',
  },
  testing: {
    'API Testing': 'https://api.qa/api',
    'API Status Page': 'https://api.status.page.as/api',
    'Performance Benchmarking': 'https://benchmark.do/api',
    'Performance Testing': 'https://perf.as/api',
    'Random Data': 'https://random.do/api',
    'Status Page': 'https://status.page.as/api',
  },
  cloudflare: {
    'Cloudflare': 'https://cloudflare.do/api',
    'API': 'https://api.cf/api',
    'Colo': 'https://colo.do/api',
    'D1': 'https://d1.cf/api',
    'Durable Objects': 'https://do.cf/api',
    'DO Alarms': 'https://alarms.cf/api',
    'Environment': 'https://env.do/api',
    'KV': 'https://kv.cf/api',
    'Service Bindings': 'https://service.do/api',
    'Workers': 'https://workers.cf/api',
    'Workers for Platforms': 'https://workers.do/api',
  },
  libraries: {
    'Lodash': 'https://lodash.do/api',
    'Lyra': 'https://lyra.do/api',
  },
  integrations: {
    'Airtable Base API': 'https://base.do/api',
    'Zapier Zap Generation': 'https://zap.do/api',
  },
  assets: {
    'Icons': 'https://icons.do/api',
    'Images': 'https://images.do/api',
    'Open Graph': 'https://ogimage.do/api',
  },
  marketing: {
    'API Landing Pages': 'https://api.page/api',
    'Blogs': 'https://blogs.do/api',
    'Chat Boxes': 'https://chat.boxes.do/api',
    'Content': 'https://content.do/api',
    'Drip Sequences': 'https://drip.do/api',
    'Glyph': 'https://glyph.do/api',
    'Landing Pages': 'https://landing.do/api',
    'Launches': 'https://launches.do/api',
    'Logos': 'https://logos.do/api',
    'Pricing': 'https://pricing.do/api',
    'Product Hunts': 'https://product.hunts.do/api',
  },
  commerce: {
    'ACH Transfers': 'https://ach.do/api',
    'Bill of Sale': 'https://bos.do/api',
    'Checkout': 'https://checkout.do/api',
    'eContract': 'https://econtract.do/api',
    'Income Verification': 'https://income.do/api',
    'Lenders': 'https://lenders.do/api',
    'Non-Disclosure Agreement': 'https://nda.do/api',
    'Notarize': 'https://notarize.do/api',
    'Payments': 'https://payments.do/api',
    'Subscriptions': 'https://subscriptions.do/api',
  },
  workflows: {
    'Workflows': 'https://workflows.do/api',
    'Concierge': 'https://concierge.do/api',
    'Notary': 'https://notary.do/api',
  },
  apps: {
    'CRMs': 'https://crms.do/api',
    'Concierge': 'https://concierge.do/api',
  },
  automotive: {
    'Automotive Data': 'https://auto.dev/api',
    'Auto Commerce APIs': 'https://driv.ly/api',
    'Dealer Service': 'https://dealers.do/api',
    'Dealer API': 'https://dealer.to/api',
    'Listings API': 'https://listings.do/api',
    'Electric Vehicles API': 'https://evs.to/api',
  },
  startup: {
    'Experiment': 'https://experiment.do/api',
    'Goals': 'https://goals.do/api',
    'Hiring': 'https://hiring.do/api',
    'Ideate': 'https://ideate.do/api',
    'Mission': 'https://mission.do/api',
    'Objectives & Key Results': 'https://okr.do/api',
    'Pricing': 'https://pricing.do/api',
  },
  tbd: {
    'Directory': 'https://directory.do/api',
    'Encrypted': 'https://encrypted.do/api',
    'Path': 'https://path.do/api',
  },
  glyph: {
    '入 Function': 'https://入.io/api',
    '凵 Schema': 'https://凵.io/api',
    '口 Resource': 'https://口.io/api',
    '回 Entity': 'https://回.io/api',
    '巛 Function': 'https://巛.io/api',
    'ılıl Analytics': 'https://ılıl.com/api',
    '彡 Database': 'https://彡.io/api',
    '亘 Page': 'https://亘.io/api',
    '目 List': 'https://目.io/api',
    '田 Collection': 'https://田.io/api',
    '卌 Counter': 'https://卌.io/api',
  },
  fun: {
    '🚀 Emojis': 'https://emojis.do/api',
  },
  opportunities: {
    'Careers': 'https://career.do/api',
    'Internships': 'https://internships.do/api',
    'Open Source Sponsorships': 'https://sponsors.do/api',
    'Project Gigs': 'https://gigs.do/api',
  },
}

export default {
  fetch: async (req, env) => {
    const { user, origin, requestId, method, body, time, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    const [ category ] = pathSegments
    const apis = categories[category] ?? categories
    return new Response(JSON.stringify({ api, apis, user }, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
  }
}

