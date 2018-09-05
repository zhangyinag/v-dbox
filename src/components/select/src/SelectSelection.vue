<template>
    <div :class="[b(), openCls]">
        <span v-for="(op, i) in selectedOptions" :key="i">{{op.text}};</span>
        <span :class="[e('arrow')]"><icon-font type="down"></icon-font></span>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'

export interface SelectOption {
  label: any
  text: string
}

@Component({
  components: {IconFont},
  })
export default class SelectSelection extends BaseComponent {
  @Prop(Boolean) dropdownVisible: boolean

  @Prop() selectedOptions: SelectOption[]

  bemBlock: string = 'select-selection'

  get openCls () {
    return !this.dropdownVisible ? '' : this.m('open')
  }
}
</script>
