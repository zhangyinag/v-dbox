<template>
<li :class="[b(), modeCls, activeCls, disabledCls, isSubCls, openCls]" @click="onClick">
    <div v-if="getMode() === 'inline'">
        <div :class="[e('title'), isSubCls, activeCls]">
            <slot name="title"></slot>
        </div>
        <div :class="[e('inline-panel'), openCls]">
            <slot></slot>
        </div>
    </div>
    <popper v-else
            :trigger="trigger" :class="[]"
            :enter-active-class="enterActiveClass"
            :leave-active-class="leaveActiveClass"
            :visible-arrow="false"
            :delay-on-mouse-over="200"
            :delay-on-mouse-out="200"
            :disabled="disabled"
            ref="popper"
            :options="options">
        <ul class="popper"><slot></slot></ul>

        <div slot="reference" :class="[e('title'), isSubCls, activeCls]"><slot name="title"></slot></div>
    </popper>
</li>
</template>

<script lang="ts">
import {Component, Inject, Prop, Provide} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {Popper} from '../../popper/index'

@Component({
  components: {Popper},
  })
export default class SubMenu extends BaseComponent {
  @Prop({type: [String, Number], required: true}) index: string | number

  @Prop(Boolean) disabled: boolean

  @Prop({type: [String], default: 'hover'}) trigger: 'hover' | 'click'

  @Prop({type: [String], default: 'bottom'}) placement: 'top'| 'top-start'| 'top-end'|
    'bottom'| 'bottom-start'| 'bottom-end'| 'left'| 'left-start'| 'left-end'| 'right'| 'right-start'| 'right-end'

  bemBlock: string = 'sub-menu'

  isSub: boolean = false

  latestSelectedIndex: string| number = ''

  open: boolean = false

  get isActive () {
    return this.latestSelectedIndex && this.getSelectedIndex() === this.latestSelectedIndex
  }

  get modeCls () {
    return this.m(this.getMode())
  }

  get activeCls () {
    return this.isActive ? this.s('active') : ''
  }

  get disabledCls () {
    return this.disabled ? this.s('disabled') : ''
  }

  get isSubCls () {
    return this.isSub ? this.s('is-sub') : ''
  }

  get openCls () {
    return this.open ? this.s('open') : ''
  }

  get options () {
    return {
      placement: (this.isSub || this.getMode() === 'vertical') ? 'right-start' : this.placement,
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        }
      }
    }
  }

  get enterActiveClass () {
    return {
      'top': !this.isSub ? 'slide-down-enter-active' : 'zoom-enter-active',
      'bottom': !this.isSub ? 'slide-up-enter-active' : 'zoom-enter-active',
      'left': !this.isSub ? 'slide-right-enter-active' : 'zoom-enter-active',
      'right': !this.isSub ? 'slide-left-enter-active' : 'zoom-enter-active'
    }
  }

  get leaveActiveClass () {
    return {
      'top': !this.isSub ? 'slide-down-leave-active' : 'zoom-leave-active',
      'bottom': !this.isSub ? 'slide-up-leave-active' : 'zoom-leave-active',
      'left': !this.isSub ? 'slide-right-leave-active' : 'zoom-leave-active',
      'right': !this.isSub ? 'slide-left-leave-active' : 'zoom-leave-active'
    }
  }

  get transition () {
    return {
      'top': !this.isSub ? 'slide-down' : 'zoom',
      'bottom': !this.isSub ? 'slide-up' : 'zoom',
      'left': !this.isSub ? 'slide-right' : 'zoom',
      'right': !this.isSub ? 'slide-left' : 'zoom'
    }
  }

  @Provide() close () {
    const $popper = this.$refs.popper as any
    if ($popper) $popper.doClose()
    if (this.isSub) {
      setTimeout(() => {
        this.upperClose()
      }, 150)
    }
  }

  @Provide('setSelectedIndex') interceptSetSelectedIndex (index: string | number) {
    this.latestSelectedIndex = index
    this.setSelectedIndex(index)
  }

  @Inject('close') upperClose: () => never

  @Inject() getMode: () => string

  @Inject() setSelectedIndex: (index: string | number) => any

  @Inject() getSelectedIndex: () => string | number

  onClick () {
    this.open = !this.open
  }

  created () {
    this.isSub = this.$parent && (this.$parent as any).bemBlock !== 'menu'
  }
}
</script>
