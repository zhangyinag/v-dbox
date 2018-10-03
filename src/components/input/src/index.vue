<template>
    <div :class="[b(), prependCls, appendCls, prefixCls, suffixCls, separatorCls, mValidateStateCls]">
       <div :class="[e('group')]">
           <span :class="[e('addon'), e('prepend')]" v-if="$slots.prepend"><slot name="prepend"></slot></span>
           <component :is="isTextarea ? 'textarea' : 'input'"
                      :type="type"
                      :class="[e('control'), disabledCls, sizeCls, sizeCls]"
                      :style="[textareaAutosizeStyle]"
                      :value="value"
                      :disabled="disabled"
                      @input="onInput"
                      @change="onChange"
                      @focus="onFocus"
                      @blur="onBlur"
                      v-bind="$attrs"></component>
           <span :class="[e('addon'), e('append')]" v-if="$slots.append"><slot name="append"></slot></span>
           <span :class="[e('prefix')]" v-if="$slots.prefix || prefixIcon">
            <slot name="prefix"></slot>
            <icon-font :type="prefixIcon" v-if="!$slots.prefix && prefixIcon"></icon-font>
        </span>
           <span :class="[e('suffix')]" v-if="$slots.suffix || suffixIcon || clearIconVisible">
            <slot name="suffix" v-if="!clearIconVisible"></slot>
            <icon-font :type="suffixIcon" v-if="!$slots.suffix && suffixIcon && !clearIconVisible"></icon-font>
            <icon-font type="close-circle" :class="[e('suffix-close')]" v-if="clearIconVisible" @click.native="onClear"></icon-font>
        </span>
       </div>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop, Inject} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'
import {ValidateState} from '../../form/src/type'

@Component({
  components: {IconFont},
  })
export default class Input extends BaseComponent {
    @Prop(Boolean) disabled: boolean

    @Prop([String, Number, Boolean]) @Model('input') value: string | number | boolean

    @Prop(String) size: 'sm' | 'lg'

    @Prop(String) prefixIcon: string

    @Prop(String) suffixIcon: string

    @Prop(Boolean) clearable: boolean

    @Prop(Boolean) separator: boolean

    @Prop({type: String, default: 'text'}) type: string

    @Prop([Boolean, Object]) autosize: {minRows?: number, maxRows?: number} & boolean

    bemBlock: string = 'input'

    isFocus: boolean = false

    get clearIconVisible () {
      return this.clearable && this.value
    }

    get isTextarea () {
      return this.type === 'textarea'
    }

    get disabledCls () {
      return !this.disabled ? '' : this.s('disabled')
    }

    get sizeCls () {
      return !this.size ? '' : this.s(this.size)
    }

    get prependCls () {
      return !this.$slots.prepend ? '' : this.m('prepend')
    }

    get appendCls () {
      return !this.$slots.append ? '' : this.m('append')
    }

    get prefixCls () {
      return (!this.$slots.prefix && !this.prefixIcon) ? '' : this.m('prefix')
    }

    get suffixCls () {
      return (!this.$slots.suffix && !this.suffixIcon && !this.clearIconVisible) ? '' : this.m('suffix')
    }

    get separatorCls (): string {
      return !this.separator ? '' : this.m('separator')
    }

    get textareaAutosizeStyle () {
      if (!this.autosize) return {}
      const minRows = (this.autosize && this.autosize.minRows) || 1
      const maxRows = (this.autosize && this.autosize.maxRows) || 1000
      let baseHeight = 32
      let rowHeight = 21
      let currentRow = (this.value + '').split(/\r*\n/).length
      return {
        maxHeight: baseHeight + rowHeight * (maxRows - 1) + 'px',
        minHeight: baseHeight + rowHeight * (minRows - 1) + 'px',
        height: baseHeight + rowHeight * (currentRow - 1) + 'px'
      }
    }

    get mValidateStateCls () {
      return !this.getValidateState() ? '' : this.m('validate-' + this.getValidateState())
    }

    @Emit() change (value: string | number| boolean) {}

    @Emit() input (value: string | number| boolean) {}

    @Inject({default: ''}) getValidateState: () => ValidateState

    onInput (e: any) {
      this.input(e.target.value)
    }

    onChange (e: any) {
      // this.input(e.target.value)
    }

    onFocus () {
      this.isFocus = true
    }

    onBlur () {
      this.isFocus = false
    }

    onClear () {
      this.input('')
    }
}
</script>
