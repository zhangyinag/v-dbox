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
                @show="onShow"
                @hide="onHide"
                :options="options">
            <span class="popper" :class="[e('popper')]">
                <ul :class="[e('dropdown')]">
                    <slot></slot>
                </ul>
            </span>

            <select-selection slot="reference" :dropdown-visible="dropdownVisible" :selected-options="selectedOptions"></select-selection>
        </popper>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop, Provide, Watch} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'
import {Popper} from '../../popper/index'
import SelectSelection from './SelectSelection.vue'
import {SelectOption} from './Option.vue'

@Component({
  components: {IconFont, Popper, SelectSelection},
  })
export default class Select extends BaseComponent {
  @Prop(Boolean) disabled: boolean

  @Prop() @Model('input') value: any

  @Prop(String) size: 'sm' | 'lg'

  @Prop(String) suffixIcon: string

  @Prop(Boolean) clearable: boolean

  @Prop(Boolean) multiple: boolean

  @Prop({type: [String], default: 'bottom-start'}) placement: 'top'| 'top-start'| 'top-end'|
    'bottom'| 'bottom-start'| 'bottom-end'| 'left'| 'left-start'| 'left-end'| 'right'| 'right-start'| 'right-end'

  bemBlock: string = 'select'

  dropdownVisible: boolean = false

  selectedOptions: SelectOption[] = [] // the better way is to use Set, but vue not support yet

  get selectedOptionLabels (): any[] {
    return this.selectedOptions.map(v => v.label)
  }

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

  @Provide() addSelectedOption (value: SelectOption) {
    if (this.selectedOptionLabels.includes(value.label)) return
    this.selectedOptions.splice(0)
    this.selectedOptions.push(value)
  }

  @Provide() getSelectedOptionLabels (): any[] {
    return this.value
  }

  @Provide() close () {
    const $popper = this.$refs.popper as any
    if ($popper) $popper.doClose()
  }

  @Emit() input (value: any): void {}

  onShow () {
    this.dropdownVisible = true
  }

  onHide () {
    this.dropdownVisible = false
  }
}
</script>
