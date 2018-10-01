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
import {Layout, Rule, ValidateResult} from './type'
import FormItem from './FormItem'
import validate from './validators'

@Component({
  components: {IconFont},
  })
export default class Form extends mixins(BemMixin) {
  @Prop({type: String, default: 'horizontal'}) layout: Layout

  formItems: FormItem[] = []

  validateResults: ValidateResult[] = []

  @Provide() getLayout (): Layout {
    return this.layout
  }

  @Provide() addFormItem (formItem: FormItem): void {
    if (this.formItems.includes(formItem)) return
    this.formItems.push(formItem)
  }

  @Provide() removeFormItem (formItem: FormItem): void {
    let idx = this.formItems.findIndex(v => v === formItem)
    if (idx !== -1) this.formItems.splice(idx, 1)
  }

  @Provide() validateField (prop: string, callback?: (err: Error) => void): void {
    const rules = this.getRules(prop)
    this.addValidateResult({
      prop: prop,
      state: 'validating'
    })
    const cb = (err: Error): void => {
      if (err) {
        this.addValidateResult({
          prop: prop,
          state: 'success',
          errMsg: err.message
        })
      } else {
        this.addValidateResult({
          prop: prop,
          state: 'error',
          errMsg: err.message
        })
      }
      if (callback) callback(err)
    }
    validate(rules, '', cb)
  }

  @Provide() getValidateResult (prop: string): ValidateResult| null {
    return this.validateResults.find(v => v.prop === prop)
  }

  getRules (prop: string): Rule[] {
    let $comp = this.formItems.find(v => v.prop === prop)
    if (!$comp) return []
    let rules = $comp.rules
    if (!rules) return []
    if (!Array.isArray(rules)) return [rules]
    return rules
  }

  addValidateResult (validateResult: ValidateResult) {
    let idx = this.validateResults.findIndex(v => v.prop === validateResult.prop)
    if (idx !== -1) this.validateResults.splice(idx, 1, validateResult)
    else this.validateResults.push(validateResult)
  }
}
</script>
