export function fibonacci(num: number) {
  let a = 1
  let b = 0
  while (num >= 0) {
    [a, b] = [a + b, a]
    num--
  }

  return b
}
