<template>
    <div :class="[b()]">
        <div :class="[e('input')]">
            <input type="text" :class="[e('input-control')]" v-model.lazy="model">
        </div>
        <component
                :is="currentCalendar + '-calendar'"
                :selected-date="value"
                :current-date.sync="currentDate"
                @choose="onChoose"
                @select="onSelect"></component>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop, Watch} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Popper} from '../../popper/index'
import DateCalendar from './DateCalendar.vue'
import MonthCalendar from './MonthCalendar.vue'
import YearCalendar from './YearCalendar.vue'
import DecadeCalendar from './DecadeCalendar.vue'
import LocaleMixin from '../../../core/mixins/LocaleMixin'
import {format, parse} from '../../../utils'
import keyup from '../../../core/directives/keyup'
import {CalendarType} from './type'

@Component({
  components: {VInput, Popper, DateCalendar, MonthCalendar, YearCalendar, DecadeCalendar},
  directives: {keyup}
  })
export default class DatePanel extends mixins(BemMixin, LocaleMixin) {
  @Prop([Date]) @Model('input') value: Date

  @Prop({type: String, default: 'shortDate'}) format: string

  @Prop(Boolean) visible: boolean

  currentDate: Date = new Date()

  currentCalendar: CalendarType = 'date'

  get model (): string {
    return this.value && format(this.value, this.format)
  }

  set model (value: string) {
    this.input((parse(value, this.format) || null) as Date | null)
  }

  @Emit() input (value: Date | null) {}

  @Emit() close () {}

  onSelect (date: Date) {
    if (this.currentCalendar === 'date') {
      this.input(date)
      this.close()
    } else if (this.currentCalendar === 'month') {
      this.currentCalendar = 'date'
      this.currentDate = date
    } else if (this.currentCalendar === 'year') {
      this.currentCalendar = 'month'
      this.currentDate = date
    } else if (this.currentCalendar === 'decade') {
      this.currentCalendar = 'year'
      this.currentDate = date
    }
  }

  onChoose (type: CalendarType) {
    this.currentCalendar = type
  }

  @Watch('visible') visibleChange (visible: boolean) {
    if (visible && this.value) {
      this.currentDate = this.value || new Date()
    }
  }

  @Watch('value') valueChange (value: Date| null) {
    this.currentDate = this.value || new Date()
  }
}
</script>
