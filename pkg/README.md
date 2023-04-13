# APIs.do - Driv.ly Workers framework

## Example

This example shows off the following features:
- Automatic API documentation
- Link generation
- Query parameter modification
- Query modification for multiple values (cities, zip codes, credit scores, etc.)

```js
import { API, json, requiresAuth, modifyQuery, modifyQueryMultiple, schemaGen } from 'apis.do'

const api = new API({
  name: 'domain.do',
  description: '🤖 API'
}, {
  examples: {
    createVehicle: '/hello/0'
  }
})

api.get('/:hello/:worldNumber?', req => {
  return {
    links: {
      self: req.url,
      next: modifyQuery(req.url, { worldNumber: req.params.worldNumber + 1 }),
      'Create Plan By City': modifyQueryMultiple(req.url, 'zip', req.ctx.cities)
    },
    data: {
      hello: req.params.hello,
      worldNumber: req.params.worldNumber
    }
  }
})

export default {
  fetch: api.fetch
}
```

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
