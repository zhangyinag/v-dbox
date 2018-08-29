<template>
    <div :class="[b(), prependCls, appendCls, prefixCls, suffixCls]">
        <span :class="[e('addon'), e('prepend')]" v-if="$slots.prepend"><slot name="prepend"></slot></span>
        <input type="text" :class="[e('control'), disabledCls, sizeCls, sizeCls]"
               :value="value"
               :disabled="disabled"
               @input="onInput"
               @change="onChange"
               v-bind="$attrs">
        <span :class="[e('addon'), e('append')]" v-if="$slots.append"><slot name="append"></slot></span>
        <span :class="[e('prefix')]" v-if="$slots.prefix || prefixIcon">
            <slot name="prefix"></slot>
            <icon-font :type="prefixIcon" v-if="!$slots.prefix && prefixIcon"></icon-font>
        </span>
        <span :class="[e('suffix')]" v-if="$slots.suffix || suffixIcon">
            <slot name="suffix"></slot>
            <icon-font :type="suffixIcon" v-if="!$slots.suffix && suffixIcon"></icon-font>
        </span>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'

@Component({
  components: {IconFont},
  })
export default class Input extends BaseComponent {
    @Prop(Boolean) disabled: boolean

    @Prop([String, Number, Boolean]) @Model('input') value: string | number | boolean

    @Prop(String) size: 'sm' | 'lg'

    @Prop(String) prefixIcon: string

    @Prop(String) suffixIcon: string

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
      return (!this.$slots.suffix && !this.suffixIcon) ? '' : this.m('suffix')
    }

    @Emit() change (value: string | number| boolean) {}

    @Emit() input (value: string | number| boolean) {}

    bemBlock: string = 'input'

    onInput (e: any) {
      this.input(e.target.value)
    }

    onChange (e: any) {
      this.input(e.target.value)
    }
}
</script>
