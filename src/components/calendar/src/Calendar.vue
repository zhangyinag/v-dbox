<template>
    <div :class="[b(), mCardCls, mModeCls]">
        <div :class="[e('header')]">
            <v-select v-model="year" :size="card ? 'sm' : ''">
                <v-option v-for="year in yearOpts" :key="year" :label="year">{{year}} {{t('year')}}</v-option>
            </v-select>
            <v-select v-model="month" v-if="mode === 'month'" :class="[e('month-select')]" :size="card ? 'sm' : ''">
                <v-option v-for="month in monthOpts" :key="month" :label="month">{{month + 1}} {{t('month')}}</v-option>
            </v-select>
            <radio-group v-model="mode" :class="[e('mode-select')]" :size="card ? 'sm' : ''">
                <radio-button label="year">{{t('year')}}</radio-button>
                <radio-button label="month">{{t('month')}}</radio-button>
            </radio-group>
        </div>
        <div :class="[e('body')]">
            <table :class="[e('table')]">
                <thead v-if="mode === 'month'">
                    <tr>
                        <th :class="[e('column-header')]" v-for="week in weeks" :key="week"><span :class="[e('column-header-inner')]">{{week}}</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, i) in rows" :key="i">
                        <td v-for="(cell, j) in row" :key="j">
                            <div :class="[e('cell'), sSelectedCls(cell), sNotCurrentMonthDayCls(cell), currentCls(cell), sDisabledCls(cell)]"
                                 @click="onCellClick(cell)">
                                <div :class="[e('cell-value')]">
                                    {{cellText(cell)}}
                                </div>
                                <div :class="[e('cell-content')]">
                                    <slot :date="cell" :mode="mode"></slot>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Emit} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Select as VSelect, Option as VOption} from '../../select'
import {RadioGroup, RadioButton} from '../../radio'
import {getRecentDayOfWeek, isSameDay, isSameMonth, isToday, range} from '../../../utils'
import LocaleMixin from '../../../core/mixins/LocaleMixin'

@Component({
  components: {RadioButton, RadioGroup, VInput, VSelect, VOption},
  })
export default class Calendar extends mixins(BemMixin, LocaleMixin) {
  @Prop(Boolean) card!: boolean

  @Prop(Function) disabledDate!: (date: Date) => boolean

  mode: 'month'| 'year' = 'month'

  year: number = new Date().getFullYear()

  month: number = new Date().getMonth()

  selectedDate: Date| null = null

  get rows (): Date[][] {
    let ret: Date[][] = []
    if (this.mode === 'year') {
      for (let i=0; i< this.months.length; i = i + 3) {
        ret.push(this.months.slice(i, i + 3))
      }
    } else if (this.mode === 'month') {
      for (let i=0; i< this.days.length; i = i + 7) {
        ret.push(this.days.slice(i, i + 7))
      }
    }
    return ret
  }

  get weeks (): string[] {
    return this.t('weeks') as string[]
  }

  get date (): Date {
    return new Date(this.year, this.month)
  }

  get months (): Date[] {
    return range(0, 11).map(v => new Date(this.date.getFullYear(), v))
  }

  get days (): Date[] {
    let start = getRecentDayOfWeek(new Date(this.date.getFullYear(), this.date.getMonth(), 1), 0)
    return range(0, 41).map(v => new Date(start.getFullYear(), start.getMonth(), start.getDate() + v))
  }

  get yearOpts () {
    let current = new Date().getFullYear()
    return range(current - 10, current + 10)
  }

  get monthOpts () {
    return range(0, 11)
  }

  get mCardCls (): string {
    return !this.card ? '' : this.m('card')
  }

  get mModeCls (): string {
    return this.m('mode-' + this.mode)
  }

  @Emit() select (date: Date) {}

  selected (date: Date): boolean {
    if (this.mode === 'month') {
      return isSameDay(date, this.selectedDate)
    } else if (this.mode === 'year') {
      return isSameMonth(date, this.selectedDate)
    }
    return false
  }

  isCurrentMonthDay (date: Date): boolean {
    if (this.mode === 'year') return false
    return isSameMonth(new Date(this.year, this.month), date)
  }

  sSelectedCls (date: Date): string {
    return !this.selected(date) ? '' : 'selected'
  }

  sNotCurrentMonthDayCls (date: Date): string {
    return this.isCurrentMonthDay(date) ? '' : this.s('not-current-month-day')
  }

  sDisabledCls (date: Date): string {
    return !this.disabled(date) ? '' : 'disabled'
  }

  currentCls (date: Date): string { // 当前月 或 今天
    if (this.mode === 'year') return !isSameMonth(date, new Date()) ? '' : 'current'
    return !isToday(date) ? '' : 'current'
  }

  cellText (date: Date): string {
    if (this.mode === 'year') {
      return (date.getMonth() + 1) + '月'
    } else if (this.mode === 'month') {
      return ('0' + date.getDate()).substr(-2)
    }
    return ''
  }

  disabled (date: Date): boolean {
    if (!this.disabledDate) return false
    return this.disabledDate(date)
  }

  onCellClick (cell: Date) {
    if (!this.disabled(cell)) {
      this.selectedDate = cell
      this.select(cell)
    }
    if (this.mode === 'month' && !this.isCurrentMonthDay(cell)) {
      this.year = cell.getFullYear()
      this.month = cell.getMonth()
    }
  }
}
</script>
