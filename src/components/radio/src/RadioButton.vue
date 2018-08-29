<template>
    <v-button :type="type" :size="getSize()" :disabled="disabled" :class="[activeCls]" @click="onClick"><slot>{{label}}</slot></v-button>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import RadioGroup from './RadioGroup.vue'
import {Button as VButton} from '../../button/index'

@Component({
  components: {VButton},
  })
export default class RadioButton extends BaseComponent {
  @Prop({type: [String, Number, Boolean]}) label: string| number| boolean

  @Prop(Boolean) disabled: boolean

  get model () {
    return (this.$parent.$parent as RadioGroup).value
  }

  get type (): string {
    return this.model === this.label ? this.getType() : ''
  }

  get activeCls () {
    return this.model !== this.label ? '' : this.s('active')
  }

  bemBlock: string = 'radio-button'

  @Inject() getType : () => string

  @Inject() getSize: () => string

  onClick () {
    (this.$parent.$parent as RadioGroup).change(this.label)
  }

  created () {
    const $parent = this.$parent as RadioGroup
    if ($parent) $parent.isButtonGroup = true
  }
}
</script>
