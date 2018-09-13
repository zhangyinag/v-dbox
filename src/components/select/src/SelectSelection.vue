<template>
    <div :class="[b(), openCls, sizeCls, disabledCls, multipleCls]" @click="onSelectClick">
        <div :class="[e('placeholder')]" v-show="placeholderVisible">{{placeholder}}</div>
        <div :class="[e('value')]">
            <template v-if="multiple">
                <tag unselectable="on" closable v-for="(opt, i) in selectedOptions" :key="opt.label" @close="onTagClose(i)">{{opt.text}}</tag>
                <input type="text" :placeholder="singleText" v-model="searchValue"
                       ref="multipleInput"
                       :style="[multipleInputAutoWidth]"
                       @focus="onInput"
                       @blur="onInputBlur" @input="onInput">
            </template>
            <template v-else>
                {{singleText}}
            </template>
        </div>
        <div :class="[e('input')]" v-show="filterable" v-if="!multiple">
            <input type="text" :placeholder="singleText" v-model.trim="searchValue"
                   @blur="onInputBlur"
                   @focus="onInput"
                   @input="onInput">
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

  get multipleInputAutoWidth () {
    if (!this.multiple) return {}
    let width = 14 * (this.searchValue || '').length + 14
    return {
      width: width + 'px'
    }
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

  onTagClose (i: number) {
    let copy = this.selectedOptions.slice(0)
    copy.splice(i, 1)
    this.selectedOptionsUpdate(copy)
  }

  // @Watch('searchValue') searchValueChange (searchValue: string) {
  //   this.delaySearch(searchValue)
  // }

  onSelectClick () {
    if (this.multiple) {
      const $multipleInput = this.$refs.multipleInput as HTMLInputElement
      if ($multipleInput) $multipleInput.focus()
    }
  }
}
</script>
