import test from 'ava'
import { apis } from './dist/index.js'

test('icon', t => t.is(apis['apis.do'].icon, '🚀'))