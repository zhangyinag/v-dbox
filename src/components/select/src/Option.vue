<template>
    <li :class="[b(), selectedCls, disabledCls]" @click="onClick">
        <slot></slot>
    </li>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'

@Component({
  components: {IconFont},
  })
export default class Option extends BaseComponent {
  @Prop({required: true}) label: any

  @Prop(Boolean) disabled: boolean

  bemBlock: string = 'option'

  get text (): any {
    let i: any
    let slotText = (i = this.$slots.default) && (i = i[0]) && (i.text)
    return slotText || this.label
  }

  get selectedCls () {
    let value = this.getValue()
    if (Array.isArray(value)) {
      return !value.includes(this.label) ? '' : this.s('selected')
    }
    return value !== this.label ? '' : this.s('selected')
  }

  get disabledCls () {
    return !this.disabled ? '' : this.s('disabled')
  }

  @Inject() getValue: () => any

  @Inject() setValue: (value: any) => void

  @Inject() close: () => void

  @Inject() addOptionComp: (comp: Option) => void

  @Inject() removeOptionComp: (comp: Option) => void

  @Inject() getMultiple: () => boolean

  onClick () {
    if (this.disabled) return
    if (this.getMultiple()) {
      let newValue: any[] = []
      let value = this.getValue()
      if (value !== null || value !== undefined) newValue = newValue.concat(value)
      let idx = newValue.findIndex(v => v === this.label)
      if (idx !== -1) newValue.splice(idx, 1)
      else newValue.push(this.label)
    } else {
      this.setValue(this.label)
      this.close()
    }
  }

  mounted () {
    this.addOptionComp(this)
    this.$once('hook:beforeDestroy', () => {
      this.removeOptionComp(this)
    })
  }
}
</script>
