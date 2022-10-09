# APIs.do - Hypermedia API Directory


## Getting Started

If you don't already have a browser extension to pretty-print JSON and make links clickable, start by installing that: <https://extensions.do>

Then you interactively use the API at: <https://apis.do/api>

```json
{
  "api": {
    "icon": "🚀",
    "name": "apis.do",
    "description": "Hypermedia-driven API Directory",
    "url": "https://apis.do/api",
    "type": "https://apis.do/core",
    "endpoints": {
      "listAllAPIs": "https://apis.do/apis",
      "listCategories": "https://apis.do/categories",
      "getCategory": "https://apis.do/:type",
      "search": "https://apis.do/search/:term"
    },
    "site": "https://apis.do",
    "login": "https://apis.do/login",
    "signup": "https://apis.do/signup",
    "subscribe": "https://apis.do/subscribe",
    "repo": "https://github.com/drivly/apis.do"
  },
  "apis": {
    "apis.do": {
      "icon": "🚀",
      "type": "core",
      "description": "Hypermedia-driven API Directory",
      "endpoints": {
        "listCategories": "/api",
        "getCategory": "/:type",
        "search": "/search/:term"
      },
      "examples": {
        "getUtilities": "/utilities",
        "searchForData": "/search/data"
      }
    },
    "esbuild.do": {
      "icon": "⚡️",
      "type": "code",
      "description": "ESBuild as a Service",
      "endpoints": {
        "build": "/:url"
      },
      "examples": {
        "buildPackage": "https://esbuild.do/pkg.do/lodash",
        "buildGeneratedWorker": "https://esbuild.do/worker.do/cube/x=5/x^3",
        "buildGist": "https://gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/0c8ef49c00d3614b04c1228f279c556c96ef14b8/index.js"
      }
    },
    "gist.do": {
      "icon": "🛠",
      "type": "code",
      "description": "Abstract Syntax Tree Parser",
      "endpoints": {
        "deployWorker": "/:gist",
        "invokeWorker": "https://gist.gist.do"
      },
      "examples": {
        "publish": "https://gist.do/28a6b4bfde485b704a2fcc9b6c874e79",
        "invokeWorker": "https://28a6b4bfde485b704a2fcc9b6c874e79.gist.do",
        "publishAPI": "https://gist.do/api/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79",
        "publishWorker": "https://gist.do/worker/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79"
      }
    },
    "pkg.do": {
      "icon": "📦",
      "type": "code",
      "description": "Simple Package Bundle CDN",
      "endpoints": {
        "getPackage": "/:package"
      },
      "examples": {
        "getAPIs": "/apis.do",
        "getLodash": "/lodash-es",
        "getVersion": "/lodash-es@4.17.21"
      }
    },
    "syntax.do": {
      "icon": "⚡️",
      "type": "code",
      "description": "Abstract Syntax Tree Parser",
      "endpoints": {
        "parseScript": "/:code",
        "parseModule": "/:url"
      },
      "examples": {
        "parseScript": "https://syntax.do/x=x+3",
        "parseGist": "https://syntax.do/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js"
      }
    },
    "worker.do": {
      "icon": "👌",
      "type": "code",
      "description": "Generate Worker from any JavaScriptFunction",
      "endpoints": {
        "buildCode": "/:name/:args/:code",
        "buildFile": "/:name/:args/:url"
      },
      "examples": {
        "workerFromScript": "https://worker.do/cube/number=5/5^3",
        "workerFromGist": "https://worker.do/math/number=5/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js"
      }
    }
  }
}
```

### Core:
  - [APIs:  ](https://apis.do/api)
  - [Context:  ](https://ctx.do/api)
  
### Primitives:
  - [APIs:  ](https://apis.do/api)
  - [Triggers:  ](https://triggers.do/api)
  - [Searches:  ](https://searches.do/api)
  - [Actions:  ](https://actions.do/api)
  - [Entity:  ](https://entity.do/api)
  - [Package:  ](https://pkg.do/api)
  - [Resource:  ](https://resource.do/api)
  - [CRUD:  ](https://crud.do/api)
  - [Objects:  ](https://objects.do/api)
  
### SaaS:
  - [Analytics:  ](https://analytics.do/api)
  - [Customers:  ](https://customers.do/api)
  - [Dashboard:  ](https://dash.do/api)
  - [Funnels:  ](https://funnels.do/api)
  - [Monetize:  ](https://monetize.do/api)
  - [Subscriptions:  ](https://subscriptions.do/api)
  - [Users:  ](https://users.do/api)
  
### Security:
  - [API Keys:  ](https://api)keys.do/api)
  - [Identity:  ](https://identity.do/api)
  - [JWT Tokens:  ](https://jwt.do/api)
  - [OAuth 2.0:  ](https://oauth.do/api)
  
### Transformation:
  - [JSONPath:  ](https://json.path.do/api)
  - [JMESPath:  ](https://jmes.path.do/api)
  - [Lodash:  ](https://lodash.do/api)
  - [Pluck:  ](https://pluck.do/api)
  - [XPath:  ](https://x.path.do/api)
  
### Tools:
  - [Count:  ](https://count.do/api)
  - [Counters:  ](https://counters.do/api)
  - [Debug:  ](https://debug.do/api)
  - [Logging:  ](https://logging.do/api)
  
### Utilities:
  - [Decode:  ](https://decode.do/api)
  - [Flatten:  ](https://flatten.do/api)
  - [Filter:  ](https://filter.do/api)
  - [Iterate:  ](https://iterate.do/api)
  - [camelCaseKeys:  ](https://camel.case.do/api)
  - [dot.case.keys:  ](https://dot.case.do/api)
  - [Human Case Keys:  ](https://human.case.do/api)
  - [kebab-case-keys:  ](https://kebab.case.do/api)
  - [snake_case_keys:  ](https://snake.case.do/api)
  - [SCREAMING_SNAKE_CASE_KEYS:  ](https://screaming.snake.case.do/api)
  - [TitleCaseKeys:  ](https://title.case.do/api)
  - [Sentence case keys:  ](https://sentence.case.do/api)
  
### Formats:
  - [CSV:  ](https://csv.do/api)
  - [Markdown:  ](https://markdown.do/api)
  - [JavaScript:  ](https://es6.do/api)
  - [TypeScript:  ](https://typescript.do/api)
  - [XML:  ](https://xml.do/api)
  - [YAML:  ](https://yaml.do/api)
  
### Convert:
  - [Convert:  ](https://convert.do/api)
  - [CSV to JSON:  ](https://csv.do/api)
  - [CSV to YAML:  ](https://csv.do/api)
  - [HTML to JSON:  ](https://htm.do/api)
  - [HTML to Markdown:  ](https://markdown.do/api)
  - [HTML to PDF:  ](https://markdown.do/api)
  - [Javascript to JSON:  ](https://es6.do/api)
  - [JSON to CSV:  ](https://csv.do/api)
  - [JSON to HTML:  ](https://htm.do/api)
  - [JSON to Javascript:  ](https://es6.do/api)
  - [JSON to PDF:  ](https://pdf.do/api)
  - [JSON to Markdown:  ](https://markdown.do/api)
  - [JSON to YAML:  ](https://yaml.do/api)
  - [JSON to XML:  ](https://xml.do/api)
  - [Markdown to JSON:  ](https://markdown.do/api)
  - [Markdown to HTML:  ](https://markdown.do/api)
  - [YAML to CSV:  ](https://yaml.do/api)
  - [YAML to JSON:  ](https://yaml.do/api)
  
### Search:
  - [Searches:  ](https://searches.do/api)
  - [Lookup:  ](https://lookup.do/api)
  
### Crypto:
  - [Encrypt:  ](https://encrypt.do/api)
  - [Decrypt:  ](https://decrypt.do/api)
  - [Hashes:  ](https://hashes.do/api)
  - [HMAC:  ](https://hmac.do/api)
  - [Vault:  ](https://vault.do/api)
  
### State:
  - [Finite State Machines:  ](https://state.do/api)
  - [State Machines:  ](https://state.machines.do/api)
  
### PubSub:
  - [PubSub:  ](https://pubsub.do/api)
  - [Triggers:  ](https://triggers.do/api)
  
### IoT:
  - [MQTT:  ](https://mqtt.do/api)
  
### Data:
  - [Database:  ](https://database.do/api)
  - [Bucket:  ](https://database.do/api)
  - [Examples:  ](https://examples.do/api)
  - [Lists:  ](https://lists.do/api)
  - [Loader:  ](https://loader.do/api)
  
### CICD:
  - [Builds:  ](https://builds.do/api)
  - [Deploys:  ](https://deploys.do/api)
  - [Environment:  ](https://env.do/api)
  http:
  - [Proxy:  ](https://prxy.do/api)
  product:
  - [Features:  ](https://features.do/api)
    - [Feature Flags:  ](https://feature.flags.do/api)
  events:
  - [Events:  ](https://events.do/api)
    - [Triggers:  ](https://triggers.do/api)
    - [Alarms:  ](https://alarms.do/api)
    - [Discord:  ](https://discord.do/api)
    - [Email:  ](https://emails.do/api)
    - [Text:  ](https://texts.do/api)
    - [Slack:  ](https://slack.do/api)
    - [Timer:  ](https://timer.do/api)
    - [Webhooks:  ](https://webhooks.do/api)
  web:
  - [Caches:  ](https://caches.do/api)
    - [Cookies:  ](https://cookies.do/api)
    - [CORS:  ](https://cors.do/api)
    - [Downloads:  ](https://downloads.do/api)
    - [Embed:  ](https://embed.do/api)
    - [Fetch:  ](https://fetch.do/api)
    - [Fetcher:  ](https://fetcher.do/api)
    - [Files:  ](https://files.do/api)
    - [Flows:  ](https://flows.do/api)
    - [Pages:  ](https://pages.do/api)
    - [Scraper:  ](https://scraper.do/api)
    - [Rewrites:  ](https://rewrites.do/api)
    - [Redirects:  ](https://redirects.do/api)
  domains:
  - [CNAME Proxy:  ](https://cname.do/api)
    - [DDNS Service:  ](https://ddns.do/api)
    - [Hostnames:  ](https://hostnames.do/api)
    - [Hostname API:  ](https://hostname.do/api)
    - [Name Servers:  ](https://nameservers.do/api)
  durableObjects:
  - [Alarms:  ](https://alarms.do/api)
    - [Copy:  ](https://copy.do/api)
    - [Backup:  ](https://backup.do/api)
    - [Restore:  ](https://restore.do/api)
    - [Import:  ](https://import.do/api)
    - [Export:  ](https://export.do/api)
    - [Indexes:  ](https://indexes.do/api)
    - [Locations:  ](https://locations.do/api)
  analytics:
  - [Analytics:  ](https://analytics.do/api)
  communication:
  - [Alerts:  ](https://alerts.do/api)
    - [Discord:  ](https://discord.do/api)
    - [Email:  ](https://emails.do/api)
    - [Text:  ](https://texts.do/api)
    - [Slack:  ](https://slack.do/api)
  functions:
  - [Functions:  ](https://functions.do/api)
    - [Dynamic Function:  ](https://function.do/api)
  apis:
  - [API Management:  ](https://api).mgmt.do/api)
    - [Testing:  ](https://api).qa/api)
    - [GraphQL:  ](https://graphql.do/api)
    - [Mashup:  ](https://mashup.do/api)
    - [Middleware:  ](https://middleware.do/api)
    - [Monetize:  ](https://monetize.do/api)
    - [Proxy:  ](https://proxies.do/api)
    - [Rate Limit:  ](https://rate.limit.do/api)
    - [Webhooks:  ](https://webhooks.do/api)
  schema:
  - [Schema Generation:  ](https://schema.do/api)
    - [GraphQL Schema:  ](https://gql.do/api)
  personas:
  - [Builders:  ](https://builders.do/api)
    - [Employees:  ](https://employees.do/api)
    - [Engineers:  ](https://engineers.do/api)
    - [Humans:  ](https://humans.do/api)
  databases:
  - [Database:  ](https://database.do/api)
    - [GraphDL:  ](https://graphdl.org/api)
    - [Graph Database:  ](https://graph.do/api)
    - [KeyV:  ](https://keyv.do/api)
    - [KVDB:  ](https://kvdb.do/api)
    - [NoSQL:  ](https://nosql.do/api)
    - [SQLite:  ](https://sqlite.do/api)
  pipes:
  - [Pipes:  ](https://pipes.do/api)
    - [Chains:  ](https://chains.do/api)
    - [Commands:  ](https://commands.do/api)
    - [Compose:  ](https://compose.do/api)
    - [Console:  ](https://console.do/api)
    - [Grep:  ](https://grep.do/api)
  ai:
  - [Artificial Intelligences:  ](https://ais.do/api)
    - [GPT-3 Templates:  ](https://gpt.do/api)
    - [GPT-3 Codex:  ](https://codex.do/api)
  content:
  - [Content:  ](https://content.do/api)
    - [Markdown:  ](https://markdown.do/api)
    - [MDX:  ](https://mdx.do/api)
  code:
  - [Abstract Syntax Tree Generation:  ](https://syntax.do/api)
    - [Algorithm Library:  ](https://algorithms.do/api)
    - [ESBuild Transpilation:  ](https://esbuild.do/api)
    - ["ES6 ":  ](https://es6.do/api)
    - ["Eval ":  ](https://eval.do/api)
    - ["Gist ":  ](https://gist.do/api)
    - ["JSX ":  ](https://jsx.do/api)
    - ["Lint ":  ](https://lint.do/api)
    - ["Loops ":  ](https://loops.do/api)
    - ["Modules ":  ](https://modules.do/api)
    - ["Packages ":  ](https://pkg.do/api)
  testing:
  - [API Testing:  ](https://api).qa/api)
    - [API Status Page:  ](https://api).status.page.as/api)
    - [Performance Benchmarking:  ](https://benchmark.do/api)
    - [Performance Testing:  ](https://perf.as/api)
    - [Status Page:  ](https://status.page.as/api)
  cloudflare:
  - [Cloudflare:  ](https://cloudflare.do/api)
    - [API:  ](https://api).cf/api)
    - [Colo:  ](https://colo.do/api)
    - [D1:  ](https://d1.cf/api)
    - [Durable Objects:  ](https://do.cf/api)
    - [DO Alarms:  ](https://alarms.cf/api)
    - [Environment:  ](https://env.do/api)
    - [KV:  ](https://kv.cf/api)
    - [Service Bindings:  ](https://service.do/api)
    - [Workers:  ](https://workers.cf/api)
    - [Workers for Platforms:  ](https://workers.do/api)
  libraries:
    - [Lodash:  ](https://lodash.do/api)
    - [Lyra:  ](https://lyra.do/api)
  integrations:
    - [Airtable Base API:  ](https://base.do/api)
    - [Zapier Zap Generation:  ](https://zap.do/api)
  assets:
    - [Icons:  ](https://icons.do/api)
    - [Images:  ](https://images.do/api)
    - [Open Graph:  ](https://ogimage.do/api)
  marketing:
    - [API Landing Pages:  ](https://api).page/api)
    - [Blogs:  ](https://blogs.do/api)
    - [Chat Boxes:  ](https://chat.boxes.do/api)
    - [Content:  ](https://content.do/api)
    - [Drip Sequences:  ](https://drip.do/api)
    - [Glyph:  ](https://glyph.do/api)
    - [Landing Pages:  ](https://landing.do/api)
    - [Launches:  ](https://launches.do/api)
    - [Logos:  ](https://logos.do/api)
    - [Product Hunts:  ](https://product.hunts.do/api)
  commerce:
    - [ACH Transfers:  ](https://ach.do/api)
    - [Bill of Sale:  ](https://bos.do/api)
    - [Checkout:  ](https://checkout.do/api)
    - [eContract:  ](https://econtract.do/api)
    - [Income Verification:  ](https://income.do/api)
    - [Lenders:  ](https://lenders.do/api)
    - [Non-Disclosure Agreement:  ](https://nda.do/api)
    - [Notarize:  ](https://notarize.do/api)
    - [Payments:  ](https://payments.do/api)
    - [Subscriptions:  ](https://subscriptions.do/api)
  workflows:
    - [Workflows:  ](https://workflows.do/api)
    - [Concierge:  ](https://concierge.do/api)
    - [Notary:  ](https://notary.do/api)
  apps:
    - [CRMs:  ](https://crms.do/api)
    - [Concierge:  ](https://concierge.do/api)
  automotive:
    - [Automotive Data:  ](https://auto.dev/api)
    - [Auto Commerce APIs:  ](https://driv.ly/api)
    - [Dealer Service:  ](https://dealers.do/api)
    - [Dealer API:  ](https://dealer.to/api)
    - [Listings API:  ](https://listings.do/api)
    - [Electric Vehicles API:  ](https://evs.to/api)
  startup:
    - [Experiment:  ](https://experiment.do/api)
    - [Goals:  ](https://goals.do/api)
    - [Hiring:  ](https://hiring.do/api)
    - [Ideate:  ](https://ideate.do/api)
    - [Mission:  ](https://mission.do/api)
    - [Objectives & Key Results:  ](https://okr.do/api)
  tbd:
    - [Directory:  ](https://directory.do/api)
    - [Encrypted:  ](https://encrypted.do/api)
    - [Path:  ](https://path.do/api)
    
### Glyph:
  - [入 Function:  ](https://入.io/api)
  - [凵 Schema:  ](https://凵.io/api)
  - [口 Resource:  ](https://口.io/api)
  - [回 Entity:  ](https://回.io/api)
  - [巛 Function:  ](https://巛.io/api)
  - [ılıl Analytics:  ](https://ılıl.com/api)
  - [彡 Database:  ](https://彡.io/api)
  - [亘 Page:  ](https://亘.io/api)
  - [目 List:  ](https://目.io/api)
  - [田 Collection:  ](https://田.io/api)
  - [卌 Counter:  ](https://卌.io/api)
    
### Fun:
  - [🚀 Emojis:  ](https://emojis.do/api)
  
### Opportunities:
  - [Careers:  ](https://career.do/api)
  - [Internships:  ](https://internships.do/api)
  - [Open Source Sponsorships:  ](https://sponsors.do/api)
  - [Project Gigs:  ](https://gigs.do/api)


## [Drivly Open](https://driv.ly/open) – Accelerating Innovation through Open Source

Our [Drivly Open Philosophy](https://philosophy.do) has these key principles:

1. [Build in Public](https://driv.ly/open/build-in-public)
2. [Create Amazing Developer Experiences](https://driv.ly/open/amazing-developer-experiences)
3. [Everything Must Have an API](https://driv.ly/open/everything-must-have-an-api)
4. [Communicate through APIs not Meetings](https://driv.ly/open/communicate-through-apis-not-meetings)
5. [APIs Should Do One Thing, and Do It Well](https://driv.ly/open/apis-do-one-thing)


###  🚀 We're Hiring!

[Driv.ly](https://driv.ly) is deconstructing the monolithic physical dealership into simple APIs enabling anyone to buy and sell cars online, and we're funded by some of the [biggest names](https://twitter.com/TurnerNovak) in [automotive](https://fontinalis.com/team/#bill-ford) and [finance & insurance](https://www.detroit.vc)

Our entire infrastructure is built with [Cloudflare Workers](https://workers.do), [Durable Objects](https://durable.objects.do), [KV](https://kv.cf), [PubSub](https://pubsub.do), R2, Pages, etc.  [If you love the Cloudflare Workers ecosystem as much as we do](https://driv.ly/loves/workers), we'd love to have you [join our team](https://careers.do/apply)!
