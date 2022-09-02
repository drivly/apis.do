export default {
  fetch: async (req, env) => {
    const { user, redirect, body } = await env.CTX.fetch(req).then(res => res.json())
    if (redirect) return Response.redirect(redirect)
    
    const { origin, pathname, search } = new URL(req.url)
    
    return new Repsonse(JSON.stringify({
      api: {
        icon: '🚀',
        name: 'apis.do',
        description: 'Composable APIs from Drivly Open',
        url: 'https://apis.do',
        api: 'https://apis.do/api',
        endpoints: {
          parse: origin + '/parse?prop=value',
          generate: origin + '/:url',
        },
        type: 'https://apis.do',
        repo: 'https://github.com/drivly/apis.do',
      },
      user,
    }, null, 2), { headers: { 'content-type': 'application/json; charset=utf8' }}) 
  }
}
