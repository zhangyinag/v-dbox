<template>
    <li :class="[b(), selectedCls, disabledCls, activeCls]" @click="onClick" v-show="visible">
        <slot></slot>
        <div :class="[e('suffix')]" v-show="selected">
            <icon-font type="check"></icon-font>
        </div>
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

  visible: boolean = true

  get text (): any {
    let i: any
    let slotText = (i = this.$slots.default) && (i = i[0]) && (i.text)
    return slotText || this.label
  }

  get selected (): boolean {
    let value = this.getValue()
    if (Array.isArray(value)) {
      return value.includes(this.label)
    }
    return value === this.label
  }

  get active () {
    return this === this.getActiveOption()
  }

  get selectedCls () {
    return !this.selected ? '' : this.s('selected')
  }

  get disabledCls () {
    return !this.disabled ? '' : this.s('disabled')
  }

  get activeCls () {
    return !this.active ? '' : this.s('active')
  }

  @Inject() getValue: () => any

  @Inject() setValue: (value: any) => void

  @Inject() close: () => void

  @Inject() addOptionComp: (comp: Option) => void

  @Inject() removeOptionComp: (comp: Option) => void

  @Inject() getMultiple: () => boolean

  @Inject() setActiveOption: (activeOption: Option| null) => void

  @Inject() getActiveOption: () => Option| null

  @Inject() focus: () => void

  onClick () {
    if (this.disabled) return
    this.setActiveOption(this)
    if (this.getMultiple()) {
      let newValue: any[] = []
      let value = this.getValue()
      if (value !== null || value !== undefined) newValue = newValue.concat(value)
      let idx = newValue.findIndex(v => v === this.label)
      if (idx !== -1) newValue.splice(idx, 1)
      else newValue.push(this.label)
      this.setValue(newValue)
      this.focus()
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
