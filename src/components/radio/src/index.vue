<template>
    <label :class="[b(), checkedCls, disabledCls]">
        <span :class="[e('control')]">
            <input type="radio" :class="[e('control-input')]" :value="label" @change="onChange" tabindex="-1" :disabled="disabled">
            <span :class="[e('control-inner')]"></span>
        </span>
        <span :class="[e('text')]"><slot></slot></span>
    </label>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Radio extends BaseComponent {
    bemBlock: string = 'radio'

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
