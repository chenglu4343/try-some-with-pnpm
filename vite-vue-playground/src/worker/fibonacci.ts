importScripts(new URL('./helpers/fibonacci.ts', import.meta.url))

globalThis.onmessage = (e) => {
  const userNum = Number(e.data)
  const answer = fibonacci(userNum)

  globalThis.postMessage(answer)
}
