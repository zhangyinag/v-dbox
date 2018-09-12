<template>
    <div :class="[b(), openCls, sizeCls, disabledCls, multipleCls]">
        <div :class="[e('placeholder')]" v-show="placeholderVisible">{{placeholder}}</div>
        <div :class="[e('value')]" unselectable="on">
            <template v-if="multiple">
                <tag closable v-for="opt in selectedOptions" :key="opt.label">{{opt.text}}</tag>
                <input type="text" :placeholder="singleText" v-model="searchValue" @blur="onInputBlur">
            </template>
            <template v-else>
                {{singleText}}
            </template>
        </div>
        <div :class="[e('input')]" v-show="filterable" v-if="!multiple">
            <input type="text" :placeholder="singleText" v-model.trim="searchValue" @blur="onInputBlur" @input="onInput">
        </div>
        <span :class="[e('close')]" v-if="clearableVisible">
            <icon-font type="close-circle" @click.native.stop="onClear"></icon-font>
        </span>
        <span :class="[e('arrow')]" v-else>
            <icon-font type="down"></icon-font>
        </span>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop, Watch} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'
import {SelectOption} from './type'
import {Tag} from '../../tag'
import {debounce} from '../../../utils'

@Component({
  components: {IconFont, Tag},
  })
export default class SelectSelection extends BaseComponent {
  @Prop(Boolean) dropdownVisible: boolean

  @Prop() selectedOptions: SelectOption[]

  @Prop(String) size: 'sm' | 'lg'

  @Prop(Boolean) disabled: boolean

  @Prop(String) placeholder: string

  @Prop(Boolean) clearable: boolean

  @Prop(Boolean) multiple: boolean

  @Prop(Boolean) filterable: boolean

  bemBlock: string = 'select-selection'

  searchValue: string = ''

  delaySearch: (searchValue: string) => void = debounce(this.search, 100, this)

  get singleText () {
    return (!this.multiple && this.selectedOptions[0] && this.selectedOptions[0].text) || ''
  }

  get placeholderVisible () {
    return this.placeholder && this.selectedOptions.length < 1
  }

  get clearableVisible () {
    return this.clearable && this.selectedOptions.length > 0
  }

  get openCls () {
    return !this.dropdownVisible ? '' : this.m('open')
  }

  get sizeCls () {
    return !this.size ? '' : this.m(this.size)
  }

  get disabledCls () {
    return !this.disabled ? '' : this.s('disabled')
  }

  get multipleCls () {
    return !this.multiple ? '' : this.m('multiple')
  }

  @Emit('update:selectedOptions') selectedOptionsUpdate (selectedOptions: SelectOption[]) {}

  @Emit() search (searchValue: string) {}
  onClear () {
    this.selectedOptionsUpdate([])
  }

  onInputBlur () {
    this.searchValue = ''
  }

  onInput () {
    this.delaySearch(this.searchValue)
  }

  // @Watch('searchValue') searchValueChange (searchValue: string) {
  //   this.delaySearch(searchValue)
  // }
}
</script>
