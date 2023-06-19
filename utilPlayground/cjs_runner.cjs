/* eslint-disable no-console */
console.log('cjs_runner.cjs')

const esmRequire = require('esm')(module)
const cjsUtil = require('./cjsUtil.cjs')

const { default: mjsUtil } = esmRequire('./mjsUtil.mjs')

mjsUtil()
cjsUtil()
