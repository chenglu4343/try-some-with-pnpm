/* eslint-disable no-console */
import assert from 'node:assert'
import { add } from '../build/debug.js'

assert.strictEqual(add(1, 2), 3)
console.log('ok')
