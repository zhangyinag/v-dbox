import {DirectiveFunction, DirectiveOptions} from 'vue/types/options'
import {VNode, VNodeDirective} from 'vue/types/vnode'
import Loading from './index.vue'

export default class LoadingDirective implements DirectiveOptions{
  bind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    const loadingComp = new Loading({
      el: document.createElement('div'),
      data: {
        value: true
      }
    });
  }
}