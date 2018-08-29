<template>
    <label :class="[b(), checkedCls, disabledCls]">
        <span :class="[e('control')]">
            <input type="radio" :class="[e('control-input')]" :value="label" @click="onChange" tabindex="-1" :disabled="disabled">
            <span :class="[e('control-inner')]"></span>
        </span>
        <span :class="[e('text')]"><slot></slot></span>
    </label>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import RadioGroup from './RadioGroup.vue'

@Component({
  components: {},
  })
export default class Radio extends BaseComponent {
    bemBlock: string = 'radio'

    hasGroup: boolean = false

    @Prop({type: [String, Number, Boolean]}) @Model('change') value: string| number| boolean

    @Prop({type: [String, Number, Boolean]}) label: string| number| boolean

    @Prop(Boolean) disabled: boolean

    @Emit() change (value: string| number| boolean) {}

    get model () {
      if (this.hasGroup) return (this.$parent as RadioGroup).value
      return this.value
    }

    get checkedCls (): string {
      return this.model !== this.label ? '' : this.m('checked')
    }

    get disabledCls (): string {
      return !this.disabled ? '' : this.s('disabled')
    }

    onChange () {
      if (this.hasGroup) {
        (this.$parent as RadioGroup).change(this.label)
      } else {
        this.change(this.label)
      }
    }

    created () {
      let $parent = this.$parent as RadioGroup
      if ($parent && $parent.bemBlock === 'radio-group') this.hasGroup = true
    }
}
</script>
