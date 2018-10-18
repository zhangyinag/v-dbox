import {DirectiveOptions, VNode, VNodeDirective} from 'vue'

const fixedPosition: DirectiveOptions = {
  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {
    el.style.top = el.offsetTop + 'px'
  },

  componentUpdated (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {

  },

  unbind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {
  }
}

export default fixedPosition
