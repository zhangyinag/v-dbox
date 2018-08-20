<template>
<div :class="[b(), hasSiderCls]">
    <slot></slot>
</div>
</template>

<script lang="ts">
import {Component, Prop, Provide, Watch} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Layout extends BaseComponent {
  bemBlock: string = 'layout'

  hasSider: boolean = false

  get hasSiderCls () {
    if (!this.hasSider) return ''
    return this.m('has-sider')
  }

  @Provide() setHasSider (has: boolean) {
    this.hasSider = has
  }
}
</script>
