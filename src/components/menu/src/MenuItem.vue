<template>
<li :class="[b(), modeCls, selectedCls, disabledCls, isSubCls]" :style="[inlineIndentStyle]" @click="onItemClick">
    <slot></slot>
</li>
</template>

<script lang="ts">
import {Component, Emit, Inject, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class MenuItem extends BaseComponent {
  @Prop({type: [String, Number], required: true}) index: string | number

  @Prop(Boolean) disabled: boolean

  bemBlock: string = 'menu-item'

  isSub: boolean = true

  get isSelected () {
    return this.getSelectedIndex() === this.index
  }

  get modeCls () {
    return this.m(this.getMode())
  }

  get selectedCls () {
    return this.isSelected ? this.s('selected') : ''
  }

  get disabledCls () {
    return this.disabled ? this.s('disabled') : ''
  }

  get isSubCls () {
    return this.isSub ? this.s('is-sub') : ''
  }

  get inlineIndentStyle () {
    if (this.getMode() !== 'inline') return {}
    return {
      paddingLeft: this.level * this.getInlineIndent() + 'px'
    }
  }

  get level (): number {
    return this.getParentLevel() + 1
  }

  @Inject() close: () => never

  @Inject() getMode: () => string

  @Inject() setSelectedIndex: (index: string | number) => any

  @Inject() getSelectedIndex: () => string | number

  @Inject() getParentLevel: () => number

  @Inject() getInlineIndent: () => number

  onItemClick () {
    this.setSelectedIndex(this.index)
    if (this.getMode() !== 'inline') this.close()
  }

  created () {
    this.isSub = this.$parent && (this.$parent as any).bemBlock !== 'menu'
  }
}
</script>
