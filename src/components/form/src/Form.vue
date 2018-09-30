<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
import {Component, Provide, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import {Layout} from './type'

@Component({
  components: {IconFont},
  })
export default class Form extends mixins(BemMixin) {
  @Prop({type: String, default: 'horizontal'}) layout: Layout

  @Provide() getLayout (): Layout {
    return this.layout
  }
}
</script>
