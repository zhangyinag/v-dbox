<template>
<div></div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Radio extends BaseComponent {
    bemBlock: string = 'radio-group'

    @Prop({type: [String, Number, Boolean]}) @Model('change') value: string| number| boolean

    @Prop({type: [String, Number, Boolean]}) label: string| number| boolean

    @Prop(Boolean) disabled: boolean

    @Emit() change (value: string| number| boolean) {}

    get checkedCls (): string {
      return this.value !== this.label ? '' : this.m('checked')
    }

    get disabledCls (): string {
      return !this.disabled ? '' : this.s('disabled')
    }

    onChange () {
      this.change(this.label)
    }
}
</script>
