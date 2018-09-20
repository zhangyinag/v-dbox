<template>
    <div :class="[b()]">
        <v-input v-model="model" :class="[e('input')]"></v-input>
        <div :class="[e('header')]">header</div>
        <div :class="[e('body')]">body</div>
        <div :class="[e('footer')]">footer</div>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Popper} from '../../popper/index'

@Component({
  components: {VInput, Popper},
  })
export default class DatePanel extends mixins(BemMixin) {
  @Prop(String) @Model('input') value: string

  get model (): string {
    return this.value
  }

  set model (value: string) {
    this.input(value)
  }

  @Emit() input (value: string) {}
}
</script>
