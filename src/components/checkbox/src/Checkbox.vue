<template>
    <label :class="[b(), sCheckedCls]">
        <span :class="[e('control')]">
            <input type="checkbox" :class="[e('control-input')]" :value="label" v-model="model" tabindex="-1">
            <span :class="[e('control-inner')]"></span>
        </span>
        <span :class="[e('text')]"><slot></slot></span>
    </label>
</template>

<script lang="ts">
import {Component, Prop, Model, Emit} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {isPrimitive} from '../../../utils'

@Component({
  components: {},
  })
export default class Checkbox extends mixins(BemMixin) {
  @Prop() @Model('input') value!: any

  @Prop({type: [String, Number, Boolean]}) label: string| number| boolean

  get model (): any {
    return this.value
  }

  set model (value: any) {
    this.input(value)
  }

  get checked (): boolean {
    if (isPrimitive(this.model)) return !!this.model
    if (Array.isArray(this.model)) return (this.model as Array).includes(this.label)
    return false
  }

  get sCheckedCls () {
    return !this.checked ? '' : this.s('checked')
  }

  @Emit() input (value: any) {}
}
</script>
