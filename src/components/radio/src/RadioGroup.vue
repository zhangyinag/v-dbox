<template>
<div :class="b()" v-if="!isButtonGroup">
    <slot></slot>
</div>
<button-group v-else><slot></slot></button-group>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop, Provide} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {ButtonGroup} from '../../button/index'

@Component({
  components: {ButtonGroup},
  })
export default class RadioGroup extends BaseComponent {
    @Prop([String, Number, Boolean]) @Model('change') value: string | number | boolean

    @Prop(String) type: 'primary'

    @Prop(String) size: 'sm' | 'lg'

    bemBlock: string = 'radio-group'

    isButtonGroup: boolean = false

    @Provide() getType (): string {
      return this.type
    }

    @Provide() getSize (): string {
      return this.size
    }

    @Emit() change (value: string| number| boolean) {}
}
</script>
