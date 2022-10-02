import test from 'ava'
import { apis } from './index.js'

test('icon', t => t.is(apis['apis.do'].icon, '🚀')) 


test('workers', t => t.is(!!apis['worker.do'], true)) 