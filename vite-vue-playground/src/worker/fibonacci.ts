importScripts(new URL('./helpers/fibonacci.ts', import.meta.url))

/* eslint-disable no-restricted-globals */
self.onmessage = (e) => {
  const userNum = Number(e.data)
  const answer = fibonacci(userNum)

  self.postMessage(answer)
}
