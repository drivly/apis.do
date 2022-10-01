export const json = (data: any)  => new Response(JSON.stringify(data, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
export const err = ({name,message,stack}: Error) => ({ error: {name,message,stack}})

export type API = {
    name: string
    icon: string
    description: string
    url: string
    type: string
    tags: string[]
    endpoints: {
        [key: string]: string
    }
    site: string
    login: string
    signup: string
    subscribe: string
}

export type APIs = {
    [key: string]: {
        icon: string
        type: string
        tags?: string[]
        description: string
        endpoints: {
            [key: string]: `/${string}` | `https://${string}`
        }
        examples:{
            [key: string]: `/${string}` | `https://${string}`
        }
    }
} 

export const apis: APIs = {
    'apis.do': {
      icon: '🚀',
      type: 'core',
      description: 'Hypermedia-driven API Directory',
      endpoints: {
        listCategories: '/api',
        getCategory: '/:type',
        search: '/search/:term',
      },
      examples: {
        getUtilities: '/utilities',
        searchForData: '/search/data',
      },
    },
    'esbuild.do': {
      icon: '⚡️',
      type: 'code',
      description: 'ESBuild as a Service',
      endpoints: {
        build: '/:url',
      },
      examples: {
        buildPackage: 'https://esbuild.do/pkg.do/lodash',
        buildGeneratedWorker: 'https://esbuild.do/worker.do/cube/x=5/x^3',
        buildGist: 'https://gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/0c8ef49c00d3614b04c1228f279c556c96ef14b8/index.js',
      }
    },
    'gist.do': {
      icon: '🛠',
      type: 'code',
      description: 'Abstract Syntax Tree Parser',
      endpoints: {
        deployWorker: '/:gist',
        invokeWorker: 'https://gist.gist.do',
      },
      examples: {
        publish: 'https://gist.do/28a6b4bfde485b704a2fcc9b6c874e79',
        invokeWorker: 'https://28a6b4bfde485b704a2fcc9b6c874e79.gist.do',
        publishAPI: 'https://gist.do/api/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79',
        publishWorker: 'https://gist.do/worker/nathanclevenger/28a6b4bfde485b704a2fcc9b6c874e79',
      }
    },
    'pkg.do': {
      icon: '📦',
      type: 'code',
      description: 'Simple Package Bundle CDN',
      endpoints: {
        getPackage: '/:package',
      },
      examples: {
        getAPIs: '/apis.do',
        getLodash: '/lodash-es',
        getVersion: '/lodash-es@4.17.21',
      },
    },
    'syntax.do': {
      icon: '⚡️',
      type: 'code',
      description: 'Abstract Syntax Tree Parser',
      endpoints: {
        parseScript: '/:code',
        parseModule: '/:url',
      },
      examples: {
        parseScript: 'https://syntax.do/x=x+3',
        parseGist: 'https://syntax.do/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js',
      },
    },
    'worker.do': {
      icon: '👌',
      type: 'code',
      description: 'Generate Worker from any JavaScriptFunction',
      endpoints: {
        buildCode: '/:name/:args/:code',
        buildFile: '/:name/:args/:url',
      },
      examples: {
        workerFromScript: 'https://worker.do/cube/number=5/5^3',
        workerFromGist: 'https://worker.do/math/number=5/gist.githubusercontent.com/nathanclevenger/05c566c2452de53caa20a32cd12fbbca/raw/203017cdae58f14d72a242627a1e10e986444a2f/index.js',
      },
    },
  }
  