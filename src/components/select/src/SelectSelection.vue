<template>
    <div :class="[b(), openCls, sizeCls, disabledCls]">
        <span v-for="(op, i) in selectedOptions" :key="i">{{op.text}};</span>
        <span :class="[e('arrow')]"><icon-font type="down"></icon-font></span>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'
import {SelectOption} from './type'

@Component({
  components: {IconFont},
  })
export default class SelectSelection extends BaseComponent {
  @Prop(Boolean) dropdownVisible: boolean

  @Prop() selectedOptions: SelectOption[]

  @Prop(String) size: 'sm' | 'lg'

  @Prop(Boolean) disabled: boolean

  bemBlock: string = 'select-selection'

  get openCls () {
    return !this.dropdownVisible ? '' : this.m('open')
  }

  get sizeCls () {
    return !this.size ? '' : this.m(this.size)
  }

  get disabledCls () {
    return !this.disabled ? '' : this.s('disabled')
  }
}
</script>
