import {DirectiveFunction, DirectiveOptions} from 'vue/types/options'
import {VNode, VNodeDirective} from 'vue/types/vnode'
import Loading from './index.vue'
import {Vue} from 'vue-property-decorator'

export default class LoadingDirective implements DirectiveOptions{
  bind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    const div = document.createElement('div')
    el.appendChild(div)
    const LoadingComp = Vue.extend(Loading)
    let propsData = {value: binding.value}
    new LoadingComp({ propsData: propsData }).$mount(div)
  }

  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    console.log('inserted')
  }

  update (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
  }
}