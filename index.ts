/* eslint-disable no-console */
import { createRequire } from 'node:module'
import { join } from 'lodash-es'

const fakeRequire = createRequire(import.meta.url)
const { add } = fakeRequire('@packages/utils')

console.log('Hello World!')

console.log(add(1, 2))

join(['a', 'b'], '-')
