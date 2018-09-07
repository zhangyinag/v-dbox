<template>
    <transition name="zoom"  @before-leave="onBeforeLeave" @leave="onLeave">
        <div :class="[b(), colorCls, colorPresetCls, checkableMcls, checkedScls, roundMcls]" :style="[colorStyle]" @click="onClick">
            <slot></slot>
            <icon-font type="close" v-show="closable" :class="[e('close')]" @click.native.stop="onClose"></icon-font>
        </div>
    </transition>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'
import {animate} from '../../../utils'

@Component({
  components: {IconFont},
  })
export default class Tag extends BaseComponent {
  @Prop(Boolean) closable: boolean

  @Prop(String) color: string

  @Prop([Boolean]) @Model('input') value: boolean

  @Prop(Boolean) checkable: boolean

  @Prop(Boolean) round: boolean

  bemBlock: string = 'tag'

  get colorPresetCls () {
    if (!this.color || this.color.startsWith('#')) return ''
    return this.m(`color-${this.color}`)
  }

  get colorCls () {
    return !this.color ? '' : this.m('color')
  }

  get checkableMcls () {
    return !this.checkable ? '' : this.m('checkable')
  }

  get checkedScls () {
    return !this.value ? '' : this.s('checked')
  }

  get roundMcls () {
    return !this.round ? '' : this.m('round')
  }

  get colorStyle () {
    if (!this.color || !this.color.startsWith('#')) return {}
    return {
      color: '#fff',
      backgroundColor: this.color,
      borderColor: this.color
    }
  }

  @Emit() close () {}

  @Emit() input (value: boolean) {}

  onClose () {
    this.close()
  }

  onClick () {
    if (this.checkable) {
      this.input(!this.value)
    } else {
      animate(this.$el, this.m('click-animating'), 'antTagEffect')
    }
  }

  onLeave (el: HTMLElement) {
    el.style.maxWidth = '0'
    el.style.opacity = '.6'
    el.style.padding = '0'
    el.style.margin = '0'
  }

  onBeforeLeave (el: HTMLElement) {
    el.style.maxWidth = el.scrollWidth + 'px'
    el.style.opacity = '1'
  }
}
</script>
