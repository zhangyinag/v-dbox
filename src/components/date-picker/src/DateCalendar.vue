<template>
    <div :class="[b()]"
        @keydown.meta.down="nextYear()"
        @keydown.meta.up="nextYear(true)"
        @keydown.ctrl.down="nextYear()"
        @keydown.ctrl.up="nextYear(true)"
        @keyup.page-down="nextMonth()"
        @keyup.page-up="nextMonth(true)"
        @keyup.up="nextWeek(true)"
        @keyup.down="nextWeek()"
        @keyup.left="nextDay(true)"
        @keyup.right="nextDay()"
        @keyup.enter="select(currentDate)">
        <div :class="[e('header')]">
            <a :class="[e('prev-year-btn')]" title="上一年 (Control键加左方向键)" @click="nextYear(true)"></a>
            <a :class="[e('prev-month-btn')]" title="上个月 (翻页上键))" @click="nextMonth(true)"></a>
            <span :class="[e('ym-select')]">
                <a :class="[e('year-select')]" title="选择年份"> {{year}}年 </a>
                <a :class="[e('month-select')]" title="选择月份"> {{month + 1}}月 </a>
            </span>
            <a :class="[e('next-month-btn')]" title="下个月 (翻页下键)" @click="nextMonth()"></a>
            <a :class="[e('next-year-btn')]" title="下一年 (Control键加右方向键)" @click="nextYear()"></a>
        </div>
        <div :class="[e('body')]">
            <table :class="[e('table')]">
                <thead>
                <tr>
                    <th :class="[e('column-header')]" v-for="week in weeks" :key="week"><span :class="[e('column-header-inner')]">{{week}}</span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, i) in rows" :key="i">
                    <td v-for="(cell, j) in row" :key="j">
                        <div :class="[e('cell'), currentCls(cell), notCurrentMonthCls(cell), todayCls(cell), selectedCls(cell)]"
                             @click="onCellClick(cell)">
                            <div :class="[e('cell-value')]">
                                {{cellText(cell)}}
                            </div>
                            <div :class="[e('cell-content')]">
                                <slot :date="cell"></slot>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div :class="[e('footer')]">
            <a :class="[e('footer-btn')]" @click="onToday">今天</a>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop, Watch} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Popper} from '../../popper/index'
import LocaleMixin from '../../../core/mixins/LocaleMixin'
import {
  addDay,
  addMonth, addWeek,
  addYear,
  format,
  getRecentDayOfWeek,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  range
} from '../../../utils'
import Focusable from '../../../core/mixins/Focusable'

@Component({
  components: {VInput, Popper},
  })
export default class DateCalendar extends mixins(BemMixin, LocaleMixin, Focusable) {
  @Prop(Date) selectedDate: Date

  @Prop(Date) currentDate: Date

  get year (): number {
    return this.currentDate.getFullYear()
  }

  get month (): number {
    return this.currentDate.getMonth()
  }

  get weeks (): string[] {
    return this.t('calendar.weeks') as string[]
  }

  get rows (): Date[][] {
    let start = getRecentDayOfWeek(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1), 0)
    let days = range(0, 41).map(v => new Date(start.getFullYear(), start.getMonth(), start.getDate() + v))
    let ret: Date[][] = []
    for (let i=0; i< days.length; i = i + 7) {
      ret.push(days.slice(i, i + 7))
    }
    return ret
  }

  @Emit() select (value: Date) {}

  @Emit('update:currentDate') currentDateUpdate (date: Date) {}

  onCellClick (cell: Date) {
    this.select(cell)
  }

  cellText (cell: Date): string {
    return cell.getDate() + ''
  }

  todayCls (cell: Date) {
    return !isToday(cell) ? '' : this.m('today', 'cell')
  }

  selectedCls (cell: Date) {
    return !isSameDay(cell, this.selectedDate) ? '' : 'selected'
  }

  currentCls (cell: Date) {
    return !isSameDay(cell, this.currentDate) ? '' : this.m('current', 'cell')
  }

  notCurrentMonthCls (cell: Date) {
    return isSameMonth(cell, this.currentDate) ? '' : this.m('not-current-month', 'cell')
  }

  onToday (cell: Date) {
    this.select(new Date())
  }

  nextYear (negative: false) {
    this.currentDateUpdate(addYear(this.currentDate, negative ? -1 : 1))
  }

  nextMonth (negative: false) {
    this.currentDateUpdate(addMonth(this.currentDate, negative ? -1 : 1))
  }

  nextDay (negative: false) {
    this.currentDateUpdate(addDay(this.currentDate, negative ? -1 : 1))
  }

  nextWeek (negative: false) {
    this.currentDateUpdate(addWeek(this.currentDate, negative ? -1 : 1))
  }
}
</script>
