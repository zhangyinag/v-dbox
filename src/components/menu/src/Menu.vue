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

  selectedIndex: string | number = ''

  bemBlock: string = 'menu'

  get modeCls (): string {
    return this.m(this.mode)
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
}
</script>
