<template>
<div :class="[b(), alignCls, gutterCls, justifyCls]">
<slot></slot>
</div>
</template>

<script lang="ts">
import {Component, Prop, Provide, Watch} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Row extends BaseComponent {
  @Prop({type: String, default: 'top'}) align: 'top' | 'middle' | 'bottom'

  // not support reactivity, if needed, extend then
  @Prop() gutter: number // | {[key: string]: any}

  @Prop({type: String, default: 'start'}) justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between'

  bemBlock: string = 'row'

  get alignCls () {
    if (!this.align) return ''
    return this.m('align-' + this.align)
  }

  get gutterCls () {
    return this.gutter ? this.m('gutter-' + this.gutter) : 0
  }

  get justifyCls () {
    if (!this.justify) return ''
    return this.m('justify-' + this.justify)
  }

  @Provide() gutterStyle () {
    return {
      paddingLeft: (this.gutter || 0)/2 + 'px',
      paddingRight: (this.gutter || 0)/2 + 'px'
    }
  }
}
</script>
