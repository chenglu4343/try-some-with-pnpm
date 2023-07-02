import { at } from 'lodash-es'
import { fibonacci } from './src/fibonacci'

globalThis.onmessage = (e) => {
  const userNum = Number(e.data)
  const answer = fibonacci(userNum)

  // just use lodash
  at({ a: { b: { c: 3 } } }, ['a.b.c'])

  globalThis.postMessage(answer)
}
