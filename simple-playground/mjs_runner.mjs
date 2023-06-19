import { createRequire } from 'node:module'
import mjsUtil from './mjsUtil.mjs'

/* eslint-disable no-console */
console.log('mjs_runner.mjs')
console.log('typeof require', typeof require)

const fakeRequire = createRequire(import.meta.url)
const cjsUtil = fakeRequire('./cjsUtil.cjs')

mjsUtil()
cjsUtil()
