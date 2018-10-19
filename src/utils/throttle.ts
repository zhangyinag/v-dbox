export function throttle (fn: Function, delay: number, context?: any) {
  let last: number = 0
  return function () {
    let curr = Date.now()
    if (curr - last > delay) {
      fn.apply(context, arguments)
      last = curr
    }
  }
}
