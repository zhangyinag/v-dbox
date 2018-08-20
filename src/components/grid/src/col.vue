<template>
<div :class="[b(), ...sizeCls, offsetCls, pullCls, pushCls]" :style="[gutterStyle(), orderStyle]">
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

  @Prop(Number) offset: number

  @Prop(Number) pull: number

  @Prop(Number) push: number

  @Prop(Number) order: number

  bemBlock: string = 'col'

  @Inject() gutterStyle: () => {[key: string]: any}

  get sizeCls () {
    const arr: string[] = []
    if (this.span) arr.push(this.m('xs-' + this.span))
    if (this.xs) arr.push(this.m('xs-' + this.xs))
    if (this.sm) arr.push(this.m('sm-' + this.sm))
    if (this.md) arr.push(this.m('md-' + this.md))
    if (this.lg) arr.push(this.m('lg-' + this.lg))
    if (this.xl) arr.push(this.m('xl-' + this.xl))
    if (this.xxl) arr.push(this.m('xxl-' + this.xxl))
    return arr
  }

  get offsetCls () {
    if (!this.offset) return ''
    return this.m('offset-' + this.offset)
  }

  get pullCls () {
    if (!this.pull) return ''
    return this.m('pull-' + this.pull)
  }

  get pushCls () {
    if (!this.push) return ''
    return this.m('push-' + this.push)
  }

  get orderStyle () {
    if (!this.order) return {}
    return {
      order: this.order
    }
  }
}
</script>
