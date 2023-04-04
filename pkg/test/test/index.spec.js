import test from "ava"
import { Miniflare } from "miniflare"

test.beforeEach((t) => {
  const mf = new Miniflare({
    envPath: true,
    packagePath: true,
    wranglerConfigPath: true,
    buildCommand: undefined,
  })

  t.context = { mf }
})

test('[API] Basic routing', async t => {
  const { mf } = t.context

  const res = await mf.dispatchFetch(
    'https://example.com/hello'
  )

  console.log(res)

  const body = await res.json()

  t.is(res.status, 200)
  
  t.is(
    body.data, 1
  )

  t.is(
    body.api.name, 'fi.vin'
  )

  t.is(
    body.api.description, '💸 Finance & Insurance APIs'
  )
})

test('[AUTH] Disallow non-logged in users', async t => {
  const { mf } = t.context

  const res = await mf.dispatchFetch(
    'https://example.com/requires-auth'
  )

  const body = await res.json()

  t.is(
    res.status, 403
  )
})