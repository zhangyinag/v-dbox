<template>
    <div :class="[b()]">
        <div :class="[e('header')]"></div>
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
                                    -
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
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Popper} from '../../popper/index'
import {getDaysOfMonth, getRecentDayOfWeek, range} from '../../../utils'

@Component({
  components: {VInput, Popper},
  })
export default class Calendar extends mixins(BemMixin) {
  @Prop({type: Boolean, default: true}) fullscreen!: boolean

  @Prop({type: String, default: 'month'}) mode!: 'month'| 'year'

  @Prop(Date) value!: Date

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
    return this.value || new Date()
  }

  get months (): number[] {
    return range(0, 11).map(v => new Date(this.date.getFullYear(), v))
  }

  get days (): number[] {
    let start = getRecentDayOfWeek(new Date(this.date.getFullYear(), this.date.getMonth(), 1), 0)
    return range(0, 41).map(v => new Date(start.getFullYear(), start.getMonth(), start.getDate() + v))
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
