<template>
    <svg :class="[b()]" :style="[sizeStyle]">
        <path :class="[e('trail')]" :stroke-linecap="strokeLinecap" :d="d" :stroke-width="strokeWidth"></path>
        <path :class="[e('path')]" :stroke-linecap="strokeLinecap" :d="d" :stroke-width="strokeWidth" :style="[strokeDasharrayStyle]"></path>
    </svg>
</template>

<script lang="ts">
import {Component, Emit, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'

@Component({
  components: {},
  })
export default class ProgressCircle extends mixins(BemMixin) {
  @Prop({type: Number, default: 120}) width: number

  @Prop({type: String, default: 'top'}) gapPosition: 'top' | 'bottom' | 'left' | 'right'

  @Prop(Number) percent: number

  @Prop({type: Number, default: 6}) strokeWidth : number

  @Prop({type: String, default: 'round'}) strokeLinecap : 'round' | 'square'

  get sizeStyle () {
    return {
      width: this.width + 'px',
      height: this.width + 'px'
    }
  }

  get r () {
    return this.width / 2
  }

  get realR () {
    return this.r - this.strokeWidth / 2
  }

  get d () {
    return `M ${this.r},${this.r} m 0,${-this.realR}
    a ${this.realR},${this.realR} 0 1 1 0,${2 * this.realR}
    a ${this.realR},${this.realR} 0 1 1 0,${-2 * this.realR}`
  }

  get strokeDasharrayStyle () {
    let total = this.realR * Math.PI * 2
    let actual = total * this.percent / 100
    return {
      strokeDasharray: `${actual}px ${total}px`
    }
  }
}
</script>
