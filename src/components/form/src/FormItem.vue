<template>
    <div :class="[b(), mLayoutCls, mValidateStateCls]" @change="onChange">
        <div :class="[e('label')]">
            <label>{{label}}</label>
        </div>
        <span :class="[e('control')]">
            <div :class="[e('children')]">
                <slot></slot>
            </div>
            <div :class="[e('explain')]">
                {{errMsg}}
            </div>
        </span>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Inject} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import {Layout, Rule, ValidateResult, ValidateState} from './type'

@Component({
  components: {IconFont},
  })
export default class FormItem extends mixins(BemMixin) {
  @Prop(String) label: string

  @Prop(String) prop: string

  @Prop(Boolean) required: boolean

  @Prop(Boolean) statusIcon: boolean

  @Prop(Boolean) showMessage: boolean

  @Prop() rules: Rule | Rule[]

  get validateState (): ValidateState {
    let result = this.getValidateResult(this.prop)
    return (result && result.state) || ''
  }

  get errMsg (): string {
    let result = this.getValidateResult(this.prop)
    return (result && result.errMsg) || ''
  }

  get mLayoutCls (): string {
    return this.m(`layout-${this.getLayout()}`)
  }

  get mValidateStateCls (): string {
    if (!this.validateState) return ''
    return this.m(this.validateState)
  }

  @Inject() getLayout: () => Layout

  @Inject() getValidateResult: (prop: string) => ValidateResult| null

  @Inject() validateField: (prop: string, callback?: (err: Error) => void) => void

  @Inject() addFormItem: (formItem: FormItem) => void

  @Inject() removeFormItem: (formItem: FormItem) => void

  onChange () {
    this.validateField(this.prop)
  }

  created () {
    this.addFormItem(this)
    this.$once('hook:beforeDestroy', () => {
      this.removeFormItem(this)
    })
  }
}
</script>
