import {DirectiveOptions, VNode, VNodeDirective} from 'vue'

const cbs: ((e: KeyboardEvent) => void)[] = []

// let win: any = window as any
// win.cbs = cbs
// there are some issue with 'keyup', when use Meta + , so apply 'keydown' here
document.addEventListener('keydown', (e) => {
  e.preventDefault()
  cbs.forEach(cb => {
    cb(e)
  })
})

const KEY_CODE: any = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
}

const SYS_KEY: any = {
  ctrl: 'ctrlKey',
  shift: 'shiftKey',
  alt: 'altKey',
  meta: 'metaKey',
}
/**
 * Note: do not bind like this: v-keyup="a(true)", use v-keyup="() => {b(true)}" instead,
 * There are couple of  compatibility issue, like Mac 'Meta', will fix those future
 */
const keyup: DirectiveOptions = {
  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {
    let fn = binding.value
    let modifiers: any = binding.modifiers
    let keyCode: number| undefined = undefined
    Object.keys(modifiers).some((key: any) => {
      if (Number.isInteger(key)) {
        keyCode = key
        return true
      }
      if (Number.isInteger(KEY_CODE[key])) {
        keyCode = KEY_CODE[key]
        return true
      }
      return false
    })

    const cb = (e: KeyboardEvent) => {
      let pass = Object.keys(SYS_KEY).every((key: any) => {
        if (!modifiers[key]) return true
        if (modifiers[key] && (e as any)[SYS_KEY[key]]) return true
        return false
      })
      if (!pass) return
      if (keyCode && keyCode !== e.keyCode) return
      fn(e)
    }
    fn._cb = cb
    cbs.push(cb)
  },

  unbind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {
    let fn = binding.value
    let idx = cbs.findIndex(cb => cb === fn._cb)
    if (idx !== -1) cbs.splice(idx, 1)
  }
}

export default keyup