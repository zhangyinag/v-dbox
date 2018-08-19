<template>
<div :class="[b(), ...sizeCls]" :style="[gutterStyle]">
<slot></slot>
</div>
</template>

<script lang="ts">
import {Component, Inject, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Col extends BaseComponent {
  @Prop(Number) span: number

  @Prop(Number) xs: number

  @Prop(Number) sm: number

  @Prop(Number) md: number

  @Prop(Number) lg: number

  @Prop(Number) xl: number

  @Prop(Number) xxl: number

  bemBlock: string = 'col'

  @Inject() gutterStyle: {[key: string]: any}

  get sizeCls () {
    const arr = []
    if (this.span) arr.push(this.m('xs-' + this.span))
    if (this.xs) arr.push(this.m('xs-' + this.xs))
    if (this.sm) arr.push(this.m('sm-' + this.sm))
    if (this.md) arr.push(this.m('md-' + this.md))
    if (this.lg) arr.push(this.m('lg-' + this.lg))
    if (this.xl) arr.push(this.m('xl-' + this.xl))
    if (this.xxl) arr.push(this.m('xxl-' + this.xxl))
    return arr
  }
}
</script>
