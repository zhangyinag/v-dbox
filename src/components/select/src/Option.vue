<template>
    <li :class="[b(), selectedCls]" @click="onClick">
        <slot></slot>
    </li>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'

export interface SelectOption {
  label: any
  text: string
}

@Component({
  components: {IconFont},
  })
export default class Option extends BaseComponent {
  @Prop({required: true}) label: any

  bemBlock: string = 'option'

  get text (): any {
    let i: any
    let slotText = (i = this.$slots.default) && (i = i[0]) && (i.text)
    return slotText || this.label
  }

  get selectedCls () {
    return !this.getSelectedOptionLabels().includes(this.label) ? '' : this.s('selected')
  }

  @Inject() addSelectedOption: (value: SelectOption) => void

  @Inject() getSelectedOptionLabels: () => any[]

  @Inject() close: () => void

  onClick () {
    this.addSelectedOption({label: this.label, text: this.text})
    this.close()
  }
}
</script>
