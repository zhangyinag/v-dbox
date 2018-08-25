<template>
   <ul :class="[b(), modeCls]">
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
  @Prop({type: [String], default: 'horizontal'}) mode: 'horizontal' | 'vertical'

  activeIndex: string | number = ''

  bemBlock: string = 'menu'

  get modeCls (): string {
    return this.m(this.mode)
  }

  @Provide() getMode (): string {
    return this.mode
  }

  @Provide() setActiveIndex (index: string | number) {
    this.activeIndex = index
  }

  @Provide() getActiveIndex () {
    return this.activeIndex
  }
}
</script>
