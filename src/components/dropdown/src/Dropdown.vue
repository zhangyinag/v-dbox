<template>
    <popper :trigger="trigger" :class="[b()]"
            :enter-active-class="enterActiveClass"
            :leave-active-class="leaveActiveClass"
            :transition="transition"
            :visible-arrow="false"
            :delay-on-mouse-over="200"
            :delay-on-mouse-out="200"
            :options="options">
       <div class="popper" :class="[e('popper')]"><slot name="dropdown"></slot></div>

        <slot slot="reference"></slot>
    </popper>
</template>
<script lang="ts">
import {Component, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {Popper} from '../../popper/index'
import {ButtonGroup, Button as VButton} from '../../button/index'
import {IconFont} from '../../iconfont/index'

@Component({
  components: {Popper, VButton, ButtonGroup, IconFont},
  })
export default class Dropdown extends BaseComponent {
  @Prop({type: [String], default: 'hover'}) trigger: 'hover' | 'click'

  @Prop({type: [String], default: 'bottom'}) placement: 'top'| 'top-start'| 'top-end'|
    'bottom'| 'bottom-start'| 'bottom-end'| 'left'| 'left-start'| 'left-end'| 'right'| 'right-start'| 'right-end'

  bemBlock: string = 'dropdown'

  get options () {
    return {
      placement: this.placement,
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        }
      }
    }
  }

  get enterActiveClass () {
    return {
      'top': 'slide-down-enter-active',
      'bottom': 'slide-up-enter-active',
      'left': 'slide-right-enter-active',
      'right': 'slide-left-enter-active',
    }
  }

  get leaveActiveClass () {
    return {
      'top': 'slide-down-leave-active',
      'bottom': 'slide-up-leave-active',
      'left': 'slide-right-leave-active',
      'right': 'slide-left-leave-active',
    }
  }

  get transition () {
    return {
      'top': 'slide-down',
      'bottom': 'slide-up',
      'left': 'slide-right',
      'right': 'slide-left',
    }
  }
}
</script>
