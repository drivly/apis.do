import { API, json, requiresAuth } from '../../dist/index.mjs'

const api = new API({
  name: 'fi.vin',
  description: '💸 Finance & Insurance APIs'
})

api.get('/hello', req => {
  return 1
})

api.get('/requires-auth', requiresAuth, req => {
  return 2
})

export default api