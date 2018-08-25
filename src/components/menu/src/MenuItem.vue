<template>
<li :class="[b(), modeCls, activeCls, disabledCls]" @click="onItemClick">
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

  get isActive () {
    return this.getActiveIndex() === this.index
  }

  get modeCls () {
    return this.m(this.getMode())
  }

  get activeCls () {
    return this.isActive ? this.s('active') : ''
  }

  get disabledCls () {
    return this.disabled ? this.s('disabled') : ''
  }

  @Inject() getMode: () => string

  @Inject() setActiveIndex: (index: string | number) => any

  @Inject() getActiveIndex: () => string | number

  onItemClick () {
    this.setActiveIndex(this.index)
  }
}
</script>
