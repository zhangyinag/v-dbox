import {DirectiveFunction, DirectiveOptions} from 'vue/types/options'
import {VNode, VNodeDirective} from 'vue/types/vnode'
import Loading from './index.vue'
import {Vue} from 'vue-property-decorator'

const store = new Map<string, Vue>()

let index = 1
function generateId (): string {
  return '' + index++
}

const loadingCompId = 'loadingCompId'

export default class LoadingDirective implements DirectiveOptions{
  bind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    const div = document.createElement('div')
    el.appendChild(div)
    const LoadingComp = Vue.extend(Loading)
    const comp =  new LoadingComp().$mount(div)
    let id = generateId()
    store.set(id, comp)
    el.dataset[loadingCompId] = id
    comp.$props['value'] = binding.value
  }

  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
  }

  update (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    let id = el.dataset[loadingCompId]
    const comp = id && store.get(id)
    if (comp) comp.$props['value'] = binding.value
  }

  unbind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode): void {
    let id = el.dataset[loadingCompId]
    if (id) store.get(id)
  }
}