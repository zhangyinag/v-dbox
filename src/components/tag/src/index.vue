<template>
    <transition name="zoom"  @before-leave="onBeforeLeave" @leave="onLeave">
        <div :class="[b()]" @click="onClick">
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

  bemBlock: string = 'tag'

  @Emit() close () {}

  onClose () {
    this.close()
  }

  onClick () {
    animate(this.$el, this.m('click-animating'), 'antTagEffect')
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
