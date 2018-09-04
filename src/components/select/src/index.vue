<template>
    <div :class="[b()]">
        <popper trigger="click"
                :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass"
                :visible-arrow="false"
                :delay-on-mouse-over="200"
                :delay-on-mouse-out="200"
                :disabled="disabled"
                ref="popper"
                :options="options">
            <span class="popper">
                <p>hhhhh</p>
            </span>

            <select-selection slot="reference"></select-selection>
        </popper>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'
import {Popper} from '../../popper/index'
import SelectSelection from './SelectSelection'

@Component({
  components: {IconFont, Popper, SelectSelection},
  })
export default class Select extends BaseComponent {
  @Prop(Boolean) disabled: boolean

  @Prop([String, Number, Boolean]) @Model('input') value: string | number | boolean

  @Prop(String) size: 'sm' | 'lg'

  @Prop(String) suffixIcon: string

  @Prop(Boolean) clearable: boolean

  @Prop({type: [String], default: 'bottom-start'}) placement: 'top'| 'top-start'| 'top-end'|
    'bottom'| 'bottom-start'| 'bottom-end'| 'left'| 'left-start'| 'left-end'| 'right'| 'right-start'| 'right-end'

  bemBlock: string = 'select'

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
      'right': 'slide-left-enter-active'
    }
  }

  get leaveActiveClass () {
    return {
      'top': 'slide-down-leave-active',
      'bottom': 'slide-up-leave-active',
      'left': 'slide-right-leave-active',
      'right': 'slide-left-leave-active'
    }
  }
}
</script>
