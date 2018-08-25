<template>
<div :class="[b(), disabledCls, dividerCls]" @click="onClick">
<slot></slot>
</div>
</template>

<script lang="ts">
import {Component, Inject, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class DropdownItem extends BaseComponent {
  @Prop(Boolean) disabled: boolean

  @Prop(Boolean) divider: boolean

  bemBlock: string = 'dropdown-item'

  hasSub: boolean = false

  get disabledCls () {
    return this.disabled ? this.s('disabled') : ''
  }

  get dividerCls () {
    return this.divider ? this.m('divider') : ''
  }

  @Inject() close: () => never

  onClick () {
    if (!this.hasSub) this.close()
  }

  mounted () {
    this.hasSub = this.$children.some((v: any) => v.bemBlock === 'dropdown')
  }
}
</script>
