import {DirectiveOptions, VNode, VNodeDirective} from 'vue'

const scrollIntoView: DirectiveOptions = {
  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {

  },

  componentUpdated (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {

  },

  unbind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {
  }
}

export default scrollIntoView
