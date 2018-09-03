import {DirectiveFunction, DirectiveOptions} from 'vue/types/options'
import {VNode, VNodeDirective} from 'vue/types/vnode'

export default class LoadingDirective implements DirectiveOptions{
  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {

  }
}