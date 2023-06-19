import { createRequire } from 'node:module'

/* eslint-disable no-console */
console.log('mjs_runner.mjs')
console.log('typeof require', typeof require)
console.log('typeof createRequire', typeof createRequire)

const fakeRequire = createRequire(import.meta.url)
const cjsUtil = fakeRequire('./cjsUtil.cjs')

cjsUtil()
