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
                <div :class="[e('input-wrap')]" slot="reference">
                    <input :class="[e('input')]" v-model.lazy="model">
                </div>

                <div :class="[e('combobox')]">
                    <div :class="[e('select')]">
                        <ul>
                            <li v-for="hour in hours" :key="hour" v-scroll-into-view="selectedHour(hour)" @click="onSelectHour(hour)" :class="[selectedHourCls(hour)]">{{hour}}</li>
                        </ul>
                    </div>
                    <div :class="[e('select')]">
                        <ul>
                            <li v-for="min in minutes" :key="min" v-scroll-into-view="selectedMin(min)" @click="onSelectMin(min)" :class="[selectedMinCls(min)]">{{min}}</li>
                        </ul>
                    </div>
                    <div :class="[e('select')]">
                        <ul>
                            <li v-for="sec in seconds" :key="sec" v-scroll-into-view="selectedSec(sec)" @click="onSelectSec(sec)" :class="[selectedSecCls(sec)]">{{sec}}</li>
                        </ul>
                    </div>
                </div>
            </span>
            <v-input slot="reference"
                     ref="input"
                     :disabled="disabled"
                     :clearable="clearable"
                     suffix-icon="clock-circle-o"
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
import {format, parse, range, trimDate} from '../../../utils'
import scrollIntoView from '../../../core/directives/scroll-into-view'

@Component({
  components: {VInput, Popper},
  directives: {scrollIntoView}
  })
export default class TimePicker extends mixins(BemMixin) {
  @Prop(Date) @Model('input') value!: Date

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) clearable: boolean

  @Prop({type: String, default: 'mediumTime'}) format: string

  $refs: any = {
    popper: Popper
  }

  popperVisible: boolean = false

  // get currentDate (): Date {
  //   return this.value
  // }

  get model (): string {
    return this.value && format(this.value, this.format) as string
  }

  set model (value: string) {
    let ret = null
    if (value) {
      ret = parse(value, this.format)
      if (!ret) return
    }
    this.input(ret as Date)
  }

  get hours (): number[] {
    return range(0, 23)
  }

  get minutes (): number[] {
    return range(0, 59)
  }

  get seconds (): number[] {
    return range(0, 59)
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

  @Emit() input (value: Date| null) {}

  selectedHour (hour: number): boolean {
    if (!this.value) return false
    return this.value.getHours() === hour
  }

  selectedMin (min: number): boolean {
    if (!this.value) return false
    return this.value.getMinutes() === min
  }

  selectedSec (sec: number): boolean {
    if (!this.value) return false
    return this.value.getSeconds() === sec
  }

  selectedHourCls (hour: number): string {
    return !this.selectedHour(hour) ? '' : 'selected'
  }

  selectedMinCls (min: number): string {
    return !this.selectedMin(min) ? '' : 'selected'
  }

  selectedSecCls (sec: number): string {
    return !this.selectedSec(sec) ? '' : 'selected'
  }

  onClose () {
    this.$refs.popper.doClose()
  }

  onSelectHour (hour: number) {
    let date = new Date(this.value || trimDate(new Date()))
    date.setHours(hour)
    this.input(date)
  }

  onSelectMin (min: number) {
    let date = new Date(this.value || trimDate(new Date()))
    date.setMinutes(min)
    this.input(date)
  }

  onSelectSec (sec: number) {
    let date = new Date(this.value || trimDate(new Date()))
    date.setSeconds(sec)
    this.input(date)
  }

  // formatTime (): string {
  //   if
  // }
  //
  // parseTime (): Date {
  //
  // }
}
</script>
