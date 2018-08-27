<template>
   <ul :class="[b(), modeCls, inlineCollapsedCls, themeCls]">
       <slot></slot>
   </ul>
</template>
<script lang="ts">
import {Component, Prop, Provide} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Menu extends BaseComponent {
  @Prop({type: [String], default: 'horizontal'}) mode: 'horizontal' | 'vertical' | 'inline'

  @Prop({type: [Number], default: 24}) inlineIndent: number

  @Prop(Boolean) inlineCollapsed: boolean

  @Prop({type: [String], default: 'light'}) theme: 'light' | 'dark'

  selectedIndex: string | number = ''

  level: number = 0

  bemBlock: string = 'menu'

  get modeCls (): string {
    return this.m(this.mode)
  }

  get themeCls (): string {
    return this.m(this.theme)
  }

  get inlineCollapsedCls (): string {
    return this.inlineCollapsed ? this.m('collapsed') : ''
  }

  @Provide() close () {
    // do nothing, prevent menu-item close emit
  }

  @Provide() getMode (): string {
    return this.mode
  }

  @Provide() setSelectedIndex (index: string | number) {
    this.selectedIndex = index
  }

  @Provide() getSelectedIndex () {
    return this.selectedIndex
  }

  @Provide() getParentLevel (): number {
    return this.level
  }

  @Provide() getInlineIndent (): number {
    return this.inlineIndent
  }

  @Provide() getInlineCollapsed (): boolean {
    return this.inlineCollapsed
  }
}
</script>
