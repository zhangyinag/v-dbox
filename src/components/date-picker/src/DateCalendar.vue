<template>
    <div :class="[b()]">
        <table :class="[e('table')]">
            <thead>
            <tr>
                <th :class="[e('column-header')]" v-for="week in weeks" :key="week"><span :class="[e('column-header-inner')]">{{week}}</span></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, i) in rows" :key="i">
                <td v-for="(cell, j) in row" :key="j">
                    <div :class="[e('cell'), todayCls(cell), selectedCls(cell)]"
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
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop, Watch} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Popper} from '../../popper/index'
import LocaleMixin from '../../../core/mixins/LocaleMixin'
import {addMonth, addYear, format, getRecentDayOfWeek, isSameDay, isToday, parse, range} from '../../../utils'

@Component({
  components: {VInput, Popper},
  })
export default class DateCalendar extends mixins(BemMixin, LocaleMixin) {
  @Prop(Number) year: number

  @Prop(Number) month: number

  @Prop(Date) selectedDate: Date

  get currentDate (): Date {
    let date = (this.selectedDate && this.selectedDate.getDate()) || new Date().getDate()
    return new Date(this.year, this.month, date)
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
}
</script>
