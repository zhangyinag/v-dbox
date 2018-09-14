<script lang="ts">
import {Component} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {CreateElement, VNodeData} from 'vue'

@Component({
  components: {}
  })
export default class Transition extends BaseComponent {
  beforeEnter (el: HTMLElement) {
  }

  enter (el: HTMLElement) {
  }

  afterEnter (el: HTMLElement) {
  }

  beforeLeave (el: HTMLElement) {
  }

  leave (el: HTMLElement) {
  }

  afterLeave (el: HTMLElement) {
  }

  // render (h: CreateElement, { children }) {
  //   const data: VNodeData = {
  //     // on: new Transition()
  //   }
  //
  //   return h('transition', data, children)
  // }
}
</script>
