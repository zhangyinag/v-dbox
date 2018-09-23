<template>
    <div :class="[b()]">
        <div :class="[e('input')]">
            <input type="text" :class="[e('input-control')]" v-model.lazy="model">
        </div>
        <date-calendar :selected-date="value" :current-date.sync="currentDate" @select="onDateSelect"></date-calendar>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop, Watch} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Popper} from '../../popper/index'
import DateCalendar from './DateCalendar.vue'
import LocaleMixin from '../../../core/mixins/LocaleMixin'
import {addMonth, addYear, format, getRecentDayOfWeek, isSameDay, isToday, parse, range} from '../../../utils'
import keyup from '../../../core/directives/keyup'

@Component({
  components: {VInput, Popper, DateCalendar},
  directives: {keyup}
  })
export default class DatePanel extends mixins(BemMixin, LocaleMixin) {
  @Prop([Date]) @Model('input') value: Date

  @Prop({type: String, default: 'shortDate'}) format: string

  @Prop(Boolean) visible: boolean

  currentDate: Date = new Date()

  get model (): string {
    return this.value && format(this.value, this.format)
  }

  set model (value: string) {
    this.input((parse(value, this.format) || null) as Date | null)
  }

  @Emit() input (value: Date | null) {}

  @Emit() close () {}

  onDateSelect (date: Date) {
    this.input(date)
    this.close()
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
