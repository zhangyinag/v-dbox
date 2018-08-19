export function animate (el: HTMLElement, cls: string, keyframes?: string) {
  if (!el.classList.contains(cls)) exec()
  el.classList.remove(cls)
  setTimeout(() => {
    exec()
  }, 0)

  function exec () {
    el.classList.add(cls)
    el.addEventListener('animationend', handler)
    function handler (e: AnimationEvent) {
      if (!keyframes || keyframes === e.animationName) {
        el.removeEventListener('animationend', handler)
        el.classList.remove(cls)
      }
    }
  }
}
