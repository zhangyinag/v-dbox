<template>
    <div :class="[b()]">
        <div :class="[e('header')]">
            <a :class="[e('prev-year-btn')]" title="上一年 (Control键加左方向键)" @click="nextCentury(true)"></a>
            <span :class="[e('ym-select')]">
                <a :class="[e('year-select')]"> {{century}} - {{century + 99}} </a>
            </span>
            <a :class="[e('next-year-btn')]" title="下一年 (Control键加右方向键)" @click="nextCentury()"></a>
        </div>
        <div :class="[e('body')]">
            <table :class="[e('table')]">
                <tbody>
                <tr v-for="(row, i) in rows" :key="i">
                    <td v-for="(cell, j) in row" :key="j">
                        <div :class="[e('cell'), notCurrentCenturyCls(cell), selectedCls(cell)]"
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
import Calendar from './Calendar'

@Component({
  components: {VInput, Popper},
  })
export default class DecadeCalendar extends mixins(BemMixin, LocaleMixin, Calendar) {
  get century (): number {
    return Math.floor(this.currentDate.getFullYear() / 100) * 100
  }

  get rows (): Date[][] {
    let ret: Date[][] = []
    let century = Math.floor(this.currentDate.getFullYear() / 100) * 100
    let all = range(-1, 10).map(v => new Date(century + v * 10, this.currentDate.getMonth(), this.currentDate.getDate()))
    for (let i = 0; i < all.length; i = i +3) {
      ret.push(all.slice(i, i + 3))
    }
    return ret
  }

  onCellClick (cell: Date) {
    this.select(cell)
  }

  nextCentury (negative: false) {
    this.currentDateUpdate(addYear(this.currentDate, negative ? -100 : 100))
  }

  cellText (cell: Date): string {
    return cell.getFullYear() + '-' + (cell.getFullYear() + 9)
  }

  notCurrentCenturyCls (cell: Date): string {
    let century = Math.floor(this.currentDate.getFullYear() / 100) * 100
    let interval = cell.getFullYear() - century
    return (interval >= 0 && interval < 100) ? '' : this.m('not-current-century', 'cell')
  }

  selectedCls (cell: Date) {
    let decade = Math.floor(this.currentDate.getFullYear() / 10) * 10
    return decade !== cell.getFullYear() ? '' : 'selected'
  }
}
</script>
