function calculate(...firstArgs) {
  return function (...secondArgs) {
    let a = firstArgs.reduce((a, b) => a + b, 0)
    let b = secondArgs.reduce((a, b) => a + b, 0)
    return a + b
  }
}