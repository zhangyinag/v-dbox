<template>
    <div :class="[b()]">
        <div :class="[e('header')]">
            <v-select v-model="year">
                <v-option v-for="year in yearOpts" :key="year" :label="year">{{year}} 年</v-option>
            </v-select>
            <v-select v-model="month" v-if="mode === 'month'">
                <v-option v-for="month in monthOpts" :key="month" :label="month">{{month + 1}} 月</v-option>
            </v-select>
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
                            <div :class="[e('cell')]">
                                <div :class="['cell-value']">
                                    {{cellText(cell)}}
                                </div>
                                <div :class="['cell-content']">
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
import {getRecentDayOfWeek, range} from '../../../utils'

@Component({
  components: {VInput, VSelect, VOption},
  })
export default class Calendar extends mixins(BemMixin) {
  @Prop({type: Boolean, default: true}) fullscreen!: boolean

  @Prop({type: String, default: 'month'}) mode!: 'month'| 'year'

  year: number = new Date().getFullYear()

  month: number = new Date().getMonth()

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

  cellText (date: Date): string {
    if (this.mode === 'year') {
      return (date.getMonth() + 1) + '月'
    } else if (this.mode === 'month') {
      return ('0' + date.getDate()).substr(-2)
    }
    return ''
  }
}
</script>
