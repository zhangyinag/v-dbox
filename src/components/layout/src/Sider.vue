<template>
    <div :class="[b()]" :style="[widthStyle, collapsedStyle]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {Component, Inject, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Sider extends BaseComponent {
    @Prop(Boolean) collapsed: boolean

    @Prop({type: String, default: '80px'}) collapsedWidth: string

    @Prop(String) width: string

    bemBlock: string = 'sider'

    @Inject() setHasSider: (has: boolean) => any

    get collapsedStyle () {
      if (!this.collapsed) return {}
      return {width: this.collapsedWidth}
    }

    get widthStyle () {
      if (!this.width) return {}
      return {width: this.width}
    }

    mounted () {
      this.setHasSider(true)
    }
}
</script>
