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

  @Prop() gutter: number // | {[key: string]: any}

  @Prop({type: String, default: 'start'}) justify: 'start' | 'end' | 'center' | 'space-around' | 'space-between'

  bemBlock: string = 'row'

  get alignCls () {
    return this.m('align-' + this.align)
  }

  get gutterCls () {
    return this.gutter ? this.m('gutter-' + this.gutter) : 0
  }

  get justifyCls () {
    return this.m('align-' + this.align)
  }

  @Provide() get gutterStyle () {
    return {
      paddingLeft: (this.gutter || 0)/2 + 'px',
      paddingRight: (this.gutter || 0)/2 + 'px'
    }
  }
}
</script>
