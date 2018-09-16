<template>
    <div style="display: inline-block"><slot></slot></div>
</template>

<script lang="ts">
import {Component, Model, Prop, Emit, Provide} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'

@Component({
  components: {},
  })
export default class CheckboxGroup extends mixins(BemMixin) {
  @Prop() @Model('input') value!: any

  @Prop(Boolean) disabled!: boolean

  @Emit() input (value: any) {}

  @Provide() checkboxGroup: CheckboxGroup = this
}
</script>
