<template>
    <div :class="[b()]">
        <popper trigger="click"
                :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass"
                :visible-arrow="false"
                :delay-on-mouse-over="200"
                :delay-on-mouse-out="200"
                :disabled="disabled"
                :options="options">
            <span class="popper" :class="[e('popper')]">
                <p>popper</p>
            </span>
            <v-input slot="reference"
                     ref="input"
                     v-model="model"></v-input>
        </popper>
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
export default class DatePicker extends mixins(BemMixin) {
  @Prop() @Model('input') value!: any

  @Prop(Boolean) disabled!: boolean

  get model (): any {
    return this.value
  }

  set model (value: any) {
    this.input(value)
  }

  get options () {
    return {
      placement: 'bottom-start',
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        }
      }
    }
  }

  get enterActiveClass () {
    return {
      'top': 'slide-down-enter-active',
      'bottom': 'slide-up-enter-active',
      'left': 'slide-right-enter-active',
      'right': 'slide-left-enter-active'
    }
  }

  get leaveActiveClass () {
    return {
      'top': 'slide-down-leave-active',
      'bottom': 'slide-up-leave-active',
      'left': 'slide-right-leave-active',
      'right': 'slide-left-leave-active'
    }
  }

  @Emit() input (value: any) {}
}
</script>
