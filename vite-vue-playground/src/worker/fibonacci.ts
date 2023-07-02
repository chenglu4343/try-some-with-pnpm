importScripts(new URL('../../node_modules/lodash/lodash.js', import.meta.url))
importScripts(new URL('./helpers/fibonacci.ts', import.meta.url))

globalThis.onmessage = (e) => {
  const userNum = Number(e.data)
  const answer = fibonacci(userNum)

  // try use lodash
  _.at({ a: 1, b: 2, c: 3 }, ['a', 'c'])

  globalThis.postMessage(answer)
}
