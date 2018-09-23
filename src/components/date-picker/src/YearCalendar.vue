<template>
    <div :class="[b()]">
        <div :class="[e('header')]">
            <a :class="[e('prev-year-btn')]" title="上一年 (Control键加左方向键)" @click="nextDecade(true)"></a>
            <span :class="[e('ym-select')]">
                <a :class="[e('year-select')]" title="选择年代" @click="choose('decade')"> {{decade}} - {{decade + 9}} </a>
            </span>
            <a :class="[e('next-year-btn')]" title="下一年 (Control键加右方向键)" @click="nextDecade()"></a>
        </div>
        <div :class="[e('body')]">
            <table :class="[e('table')]">
                <tbody>
                <tr v-for="(row, i) in rows" :key="i">
                    <td v-for="(cell, j) in row" :key="j">
                        <div :class="[e('cell'), notCurrentDecadeCls(cell), selectedCls(cell)]"
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
export default class YearCalendar extends mixins(BemMixin, LocaleMixin, Calendar) {
  get decade (): number {
    return Math.floor(this.currentDate.getFullYear() / 10) * 10
  }

  get rows (): Date[][] {
    let ret: Date[][] = []
    let all = range(-1, 10).map(v => new Date(this.currentDate.getFullYear() + v, this.currentDate.getMonth(), this.currentDate.getDate()))
    for (let i = 0; i < all.length; i = i +3) {
      ret.push(all.slice(i, i + 3))
    }
    return ret
  }

  onCellClick (cell: Date) {
    this.select(cell)
  }

  nextDecade (negative: false) {
    this.currentDateUpdate(addYear(this.currentDate, negative ? -10 : 10))
  }

  cellText (cell: Date): string {
    return cell.getFullYear()
  }

  notCurrentDecadeCls (cell: Date): string {
    let interval = cell.getFullYear() - this.currentDate.getFullYear()
    return (interval >= 0 && interval < 10) ? '' : this.m('not-current-decade', 'cell')
  }

  selectedCls (cell: Date) {
    return (this.currentDate.getFullYear() - cell.getFullYear()) % 20 !== 0 ? '' : 'selected'
  }
}
</script>
