<template>
    <div :class="[b(), mLayoutCls]">
        <div :class="[e('label')]">
            <label>{{label}}</label>
        </div>
        <span :class="[e('control')]">
            <div :class="[e('children')]">
                <slot></slot>
            </div>
            <div :class="[e('explain')]"></div>
        </span>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Inject} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import {Layout} from './type'

@Component({
  components: {IconFont},
  })
export default class FormItem extends mixins(BemMixin) {
  @Prop(String) label: string

  @Inject() getLayout: () => Layout

  get mLayoutCls (): string {
    return this.m(`layout-${this.getLayout()}`)
  }
}
</script>
