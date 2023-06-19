export function sleepTime(time: number, cb?: Function) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb?.()
      resolve(true)
    }, time)
  })
}
