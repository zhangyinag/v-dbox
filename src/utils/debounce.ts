export function debounce (fn: Function, delta: number, context?: any) {
  let timerId: any
  return function () {
    clearTimeout(timerId)
    let args = arguments
    timerId = setTimeout(function () {
      fn.apply(context, args)
    }, delta)
  }
}
