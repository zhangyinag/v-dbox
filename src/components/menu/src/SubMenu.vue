<template>
<div :class="[b(), modeCls, activeCls, disabledCls]">

</div>
</template>

<script lang="ts">
import {Component, Inject, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class SubMenu extends BaseComponent {
  @Prop({type: [String, Number], required: true}) index: string | number

  @Prop(Boolean) disabled: boolean

  bemBlock: string = 'sub-menu'

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
}
</script>
