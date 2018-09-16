<template>
    <label :class="[b(), disabledCls, sCheckedCls, sIndeterminateCls, sFocusCls]">
        <span :class="[e('control')]">
            <input type="checkbox"
                   :class="[e('control-input')]"
                   :value="label" v-model="model"
                   :disabled="disabled"
                   @blur="onBlur"
                   @focus="onFocus">
            <span :class="[e('control-inner')]"></span>
        </span>
        <span :class="[e('text')]"><slot></slot></span>
    </label>
</template>

<script lang="ts">
import {Component, Prop, Model, Emit, Inject} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {isPrimitive} from '../../../utils'
import CheckboxGroup from './CheckboxGroup.vue'

@Component({
  components: {},
  })
export default class Checkbox extends mixins(BemMixin) {
  @Prop() @Model('input') value!: any

  @Prop({type: [String, Number, Boolean]}) label: string| number| boolean

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) indeterminate!: boolean

  focus: boolean = false

  get model (): any {
    if (this.checkboxGroup) {
      return this.checkboxGroup.value
    } else {
      return this.value
    }
  }

  set model (value: any) {
    if (this.checkboxGroup) {
      this.checkboxGroup.input(value)
    } else {
      this.input(value)
    }
  }

  get checked (): boolean {
    if (isPrimitive(this.model)) return !!this.model
    if (Array.isArray(this.model)) return (this.model as any[]).includes(this.label)
    return false
  }

  get sCheckedCls () {
    return !this.checked ? '' : this.s('checked')
  }

  get sIndeterminateCls () {
    return !this.indeterminate ? '' : this.s('indeterminate')
  }

  get sFocusCls () {
    return !this.focus ? '' : this.s('focus')
  }

  get disabledCls () {
    return !this.disabled ? '' : this.s('disabled')
  }

  @Inject({ default: null }) checkboxGroup!: CheckboxGroup| null

  @Emit() input (value: any) {}

  onFocus () {
    this.focus = true
  }

  onBlur () {
    this.focus = false
  }
}
</script>
