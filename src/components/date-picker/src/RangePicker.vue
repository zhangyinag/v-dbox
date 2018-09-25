<template>
    <div :class="[b()]">
        <popper trigger="click"
                ref="popper"
                :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass"
                :visible-arrow="false"
                :delay-on-mouse-over="200"
                :delay-on-mouse-out="200"
                :disabled="disabled"
                @show="popperVisible = true"
                @hide="popperVisible = false"
                :options="options">
            <span class="popper" :class="[e('popper')]">
                <div :class="[e('input-group')]">
                    <input type="text" :class="[e('input-group-control')]" placeholder="开始日期">
                    <input type="text" :class="[e('input-group-control')]" placeholder="~" style="pointer-events: none; width: 32px;">
                    <input type="text" :class="[e('input-group-control')]" placeholder="结束日期">
                </div>
                <div style="display: table;">
                    <date-calendar
                            style="display: table-cell;"
                            :selected-date="value"
                            :current-date.sync="currentStartDate"></date-calendar>
                    <date-calendar
                            style="display: table-cell;"
                            :selected-date="value"
                            :current-date.sync="currentEndDate"></date-calendar>
                </div>
            </span>
            <v-input slot="reference"
                     ref="input"
                     :clearable="clearable"
                     suffix-icon="calendar"
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
import DateCalendar from './DateCalendar.vue'
import {format, parse} from '../../../utils'
import {CalendarType} from './type'

@Component({
  components: {VInput, Popper, DateCalendar},
  })
export default class RangePicker extends mixins(BemMixin) {
  @Prop() @Model('input') value!: [any, any]

  @Prop({type: String, default: 'shortDate'}) format: string

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) clearable: boolean

  $refs: any = {
    popper: Popper
  }

  popperVisible: boolean = false

  currentStartDate: Date = new Date()

  currentEndDate: Date = new Date()

  get model (): string {
    return this.value && format(this.value, this.format)
  }

  set model (value: string) {
    this.input((parse(value, this.format) || null) as Date | null)
  }

  get valueProp (): any {
    return this.value
  }

  set valueProp (value: any) {
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

  onClose () {
    this.$refs.popper.doClose()
  }
}
</script>
