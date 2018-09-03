<template>
    <div :class="[b(), visibleCls, fullscreenCls]" :style="[backgroundColorStyle]">
        <div :class="[e('icon')]"><icon-font :type="spinner" spin></icon-font></div>
        <div :class="[e('text')]">{{text}}</div>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop, Watch} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont'

@Component({
  components: {IconFont},
  })
export default class Loading extends BaseComponent {
  @Prop(Boolean) @Model('input') value: boolean

  @Prop({type: String, default: 'loading-3-quarters'}) spinner: string

  @Prop({type: String, default: 'Loading...'}) text: string

  @Prop(String) backgroundColor: string

  @Prop(Boolean) fullscreen: boolean

  bemBlock: string = 'loading'

  @Emit() input (value: boolean) {}

  get visibleCls () {
    return !this.value ? '' : this.s('visible')
  }

  get fullscreenCls () {
    return !this.fullscreen ? '' : this.m('fullscreen')
  }

  get backgroundColorStyle () {
    if (!this.backgroundColor) return {}
    return {
      backgroundColor: this.backgroundColor
    }
  }

  resetPosition () {
    const $parentEl = this.$el.parentElement
    if ($parentEl && ['relative', 'absolute', 'fixed'].indexOf($parentEl.style.position || '') === -1) {
      $parentEl.style.position = 'relative'
    }
  }

  @Watch('value') valueChange (value: boolean) {
    if (value) this.resetPosition()
  }
}
</script>
