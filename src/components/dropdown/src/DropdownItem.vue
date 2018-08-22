<template>
<div :class="[b(), disabledCls, dividerCls]">
<slot></slot>
</div>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class DropdownItem extends BaseComponent {
  @Prop(Boolean) disabled: boolean

  @Prop(Boolean) divider: boolean

  bemBlock: string = 'dropdown-item'

  get disabledCls () {
    return this.disabled ? this.s('disabled') : ''
  }

  get dividerCls () {
    return this.divider ? this.m('divider') : ''
  }
}
</script>
