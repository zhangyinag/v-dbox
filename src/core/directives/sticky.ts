import {DirectiveOptions, VNode, VNodeDirective} from 'vue'

const excludeElements = ['TABLE'] // these are the elements can't scroll

function scrollHandler (el: HTMLElement, parent: HTMLElement) {
  el.style.transform = `translateY(${parent.scrollTop}px)`
}

function findScrollParentEle (el: HTMLElement): HTMLElement {
  let parent = el.parentElement
  while (parent && excludeElements.includes(parent.tagName)) {
    parent = parent.parentElement
  }
  return parent as HTMLElement
}

const sticky: DirectiveOptions = {
  inserted (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {
    let parent = findScrollParentEle(el);
    console.log(parent)
    const __stickyFn = () => {
      scrollHandler(el, parent)
    }
    if (parent) {
      parent.addEventListener('scroll', function () {
        __stickyFn();
        (parent as any).__stickyFn = __stickyFn
      })
    }
  },

  componentUpdated (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {

  },

  unbind (el: HTMLElement, binding: VNodeDirective, vnode: VNode, oldVnode: VNode) : void {
    let parent = findScrollParentEle(el)
    if (parent && (parent as any).__stickyFn) {
      parent.removeEventListener('scroll', (parent as any).__stickyFn)
    }
  }
}

export default sticky
