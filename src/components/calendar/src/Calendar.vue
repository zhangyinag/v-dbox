<template>
    <div :class="[b()]">
        <div :class="[e('header')]">
            <v-select v-model="year">
                <v-option v-for="year in yearOpts" :key="year" :label="year">{{year}} 年</v-option>
            </v-select>
            <v-select v-model="month" v-if="mode === 'month'" :class="[e('month-select')]">
                <v-option v-for="month in monthOpts" :key="month" :label="month">{{month + 1}} 月</v-option>
            </v-select>
            <radio-group v-model="mode" :class="[e('mode-select')]">
                <radio-button label="year">年</radio-button>
                <radio-button label="month">月</radio-button>
            </radio-group>
        </div>
        <div :class="[e('body')]">
            <table :class="[e('table')]">
                <thead v-if="mode === 'month'">
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, i) in rows" :key="i">
                        <td v-for="(cell, j) in row" :key="j">
                            <div :class="[e('cell'), sSelectedCls(cell)]" @click="onCellClick(cell)">
                                <div :class="[e('cell-value')]">
                                    {{cellText(cell)}}
                                </div>
                                <div :class="[e('cell-content')]">
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
import {Component, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Select as VSelect, Option as VOption} from '../../select'
import {RadioGroup, RadioButton} from '../../radio'
import {getRecentDayOfWeek, isSameDay, isSameMonth, range} from '../../../utils'

@Component({
  components: {RadioButton, RadioGroup, VInput, VSelect, VOption},
  })
export default class Calendar extends mixins(BemMixin) {
  @Prop(Boolean) card!: boolean

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

  selected (date: Date): boolean {
    if (this.mode === 'month') {
      return isSameDay(date, this.selectedDate)
    } else if (this.mode === 'year') {
      return isSameMonth(date, this.selectedDate)
    }
    return false
  }

  sSelectedCls (date: Date): string {
    return !this.selected(date) ? '' : 'selected'
  }

  cellText (date: Date): string {
    if (this.mode === 'year') {
      return (date.getMonth() + 1) + '月'
    } else if (this.mode === 'month') {
      return ('0' + date.getDate()).substr(-2)
    }
    return ''
  }

  onCellClick (cell: Date) {
    this.selectedDate = cell
  }
}
</script>
