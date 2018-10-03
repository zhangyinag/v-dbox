<template>
    <div :class="[b(), mLayoutCls, mValidateStateCls, mRequiredCls]" @change="onChange" @focusout="onBlur">
        <div :class="[e('label')]" :style="[labelWidthStyle]">
            <label>{{label}}</label>
        </div>
        <span :class="[e('control')]">
            <div :class="[e('children')]">
                <slot></slot>
            </div>
            <transition name="slide-up">
                <div :class="[e('explain')]" v-show="explainVisible">
                    {{errMsg}}
                </div>
            </transition>
        </span>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Inject, Provide} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import {Layout, Rule, ValidateResult, ValidateState} from './type'
import {deepClone} from '../../../utils'

@Component({
  components: {IconFont},
  })
export default class FormItem extends mixins(BemMixin) {
  @Prop(String) label: string

  @Prop(String) prop: string

  @Prop(Boolean) required: boolean

  @Prop(Boolean) statusIcon: boolean

  @Prop(Boolean) showMessage: boolean

  @Prop({type: String, default: '80px'}) labelWidth: string

  @Prop() rules: Rule | Rule[]

  initialValue: any = null

  get validateState (): ValidateState {
    let result = this.getValidateResult(this.prop)
    return (result && result.state) || ''
  }

  get errMsg (): string {
    let result = this.getValidateResult(this.prop)
    return (result && result.errMsg) || ''
  }

  get explainVisible (): boolean {
    return !!this.errMsg
  }

  get mLayoutCls (): string {
    return this.m(`layout-${this.getLayout()}`)
  }

  get mValidateStateCls (): string {
    if (!this.validateState) return ''
    return this.m(this.validateState)
  }

  get mRequiredCls (): string {
    return !this.required ? '' : this.m('required')
  }

  get labelWidthStyle () {
    return {
      width: this.labelWidth
    }
  }

  @Provide() getValidateState (): ValidateState {
    return this.validateState
  }

  @Inject() getLayout: () => Layout

  @Inject() getValidateResult: (prop: string) => ValidateResult| null

  @Inject() validateField: (prop: string, trigger?: string, callback?: (err: Error) => void) => void

  @Inject() addFormItem: (formItem: FormItem) => void

  @Inject() removeFormItem: (formItem: FormItem) => void

  @Inject() getModel: () => any

  onChange () {
    this.validateField(this.prop, 'change')
  }

  onBlur () {
    console.log('blur')
    this.validateField(this.prop, 'blur')
  }

  resetField () {
    let model: any = this.getModel()
    if (model && this.prop) {
      model[this.prop] = this.initialValue
    }
  }

  created () {
    this.addFormItem(this)
    this.$once('hook:beforeDestroy', () => {
      this.removeFormItem(this)
    })
    let model = this.getModel()
    if (model && this.prop) {
      let value = model[this.prop]
      this.initialValue = deepClone<any>(value)
    }
  }
}
</script>
