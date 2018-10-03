<template>
    <form onsubmit="return false">
        <slot></slot>
    </form>
</template>

<script lang="ts">
import {Component, Provide, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import {Layout, Rule, ValidateResult} from './type'
import FormItem from './FormItem.vue'
import validate from './validators'

@Component({
  components: {IconFont},
  })
export default class Form extends mixins(BemMixin) {
  @Prop({type: String, default: 'horizontal'}) layout: Layout

  @Prop() model: any

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

  @Provide() validateField (prop: string, trigger?: string, callback?: (err?: Error) => void): void {
    const rules = this.getRules(prop)
      .filter(v => {
        return !trigger || trigger === v.trigger
      })
      .map(v => Object.assign({field: prop}, v))
    this.addValidateResult({
      prop: prop,
      state: 'validating'
    })
    const cb = (err?: Error): void => {
      if (err) {
        this.addValidateResult({
          prop: prop,
          state: 'error',
          errMsg: err.message
        })
      } else {
        this.addValidateResult({
          prop: prop,
          state: 'success'
        })
      }
      if (callback) callback(err)
    }
    validate(rules, this.getValue(prop), cb)
  }

  @Provide() getValidateResult (prop: string): ValidateResult| undefined {
    return this.validateResults.find(v => v.prop === prop)
  }

  @Provide() getModel (): any {
    return this.model
  }

  getRules (prop: string): Rule[] {
    let $comp = this.formItems.find(v => v.prop === prop)
    if (!$comp) return []
    let rules = $comp.rules
    if (!rules) return []
    if (!Array.isArray(rules)) return [rules]
    return rules
  }

  getValue (prop: string): any {
    if (!this.model) return undefined
    return this.model[prop]
  }

  addValidateResult (validateResult: ValidateResult) {
    let idx = this.validateResults.findIndex(v => v.prop === validateResult.prop)
    if (idx !== -1) this.validateResults.splice(idx, 1, validateResult)
    else this.validateResults.push(validateResult)
  }

  validate (): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let ret: any[] = []
      let total = 0
      let count = 0
      this.formItems.forEach($item => {
        let prop = $item.prop
        if (!prop) return
        total++
        this.validateField(prop, '', (err?: Error) => {
          if (err) {
            ret.push({
              prop: prop,
              err: err
            })
          }
          count++
          if (count >= total) {
            if (ret.length > 0) reject(ret)
            else resolve()
          }
        })
      })
    })
  }

  resetField () {
    this.formItems.forEach($item => {
      $item.resetField()
    })
    this.validateResults = []
  }
}
</script>
