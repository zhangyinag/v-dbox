<template>
    <div :class="[b(), mBorderedCls]">
        <div :class="[e('header')]">
        </div>
        <div :class="[e('body')]" :style="[heightStyle]" @scroll.passive="onScroll" ref="body">
            <table>
                <colgroup>
                    <col v-for="(col, i) in renderCols" :key="col.prop || col.label || i"/>
                </colgroup>
                <tbody>
                    <tr v-for="(row, i) in renderData" :key="i">
                        <td v-for="(col, j) in renderCols" :key="col.prop || col.label || j"
                            :style="[]"
                            :class="['td', fixedCls(col), scrollCls(col)]">
                            <table-cell :row="row" :table-column="col" :index="i"></table-cell>
                        </td>
                    </tr>
                </tbody>
                <thead>
                <tr>
                    <th v-for="(col, i) in renderCols" :key="col.prop || col.label || i"
                        :style="[colStyle(col)]"
                        @resize="onResize"
                        :class="['th', fixedCls(col), scrollCls(col)]">
                        <div :style="[colStyle(col)]">{{col.label}}</div>
                    </th>
                </tr>
                </thead>
            </table>
        </div>
        <div :class="[e('footer')]"></div>
        <div hidden>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Provide} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import Rippleable from '../../../core/mixins/Rippleable'
import TableColumn from './TableColumn.vue'
import TableCell from './TableCell'
import {isCssSupports} from '../../../utils'

@Component({
  components: {TableCell},
  directives: {}
  })
export default class Table extends mixins(BemMixin, Rippleable) {
    @Prop(Array) data: any[]

    @Prop(String) height: string

    @Prop(Boolean) bordered: boolean

    cols: TableColumn[] = []

    leftScroll: boolean = false

    rightScroll: boolean = false

    get renderCols (): TableColumn [] {
      return this.cols
    }

    get renderData (): any[] {
      return this.data || []
    }

    get mBorderedCls () {
      return !this.bordered ? '' : this.m('bordered')
    }

    get heightStyle () {
      if (!this.height) return {}
      return {
        height: this.height
      }
    }

    fixedCls (col: TableColumn) {
      if (!col.fixed) return ''
      return this.m(`fixed-${col.fixed}`, 'cell')
    }

    scrollCls (col: TableColumn) {
      if (!col.fixed) return ''
      if (this.leftScroll && col.fixed === 'left') return 'scroll'
      if (this.rightScroll && col.fixed === 'right') return 'scroll'
    }

    colStyle (col: TableColumn) {
      let style: any = {}
      if (col.width) {
        Object.assign(style, {width: col.width})
      }
      return style
    }

    @Provide() addCol (col: TableColumn) {
      if (!this.cols.includes(col)) this.cols.push(col)
    }

    @Provide() removeCol (col: TableColumn) {
      let idx = this.cols.indexOf(col)
      if (idx !== -1) this.cols.splice(idx, 1)
    }

    onScroll () {
      const $wrapper = this.$refs.body as HTMLElement
      let $head = $wrapper.querySelector('thead') as HTMLElement
      let $table = $wrapper.querySelector('table') as HTMLElement
      // $head.style.transform = `translateY(${$wrapper.scrollTop}px)`

      let right = $wrapper.scrollWidth - $wrapper.scrollLeft - $wrapper.clientWidth
      let left = $wrapper.scrollLeft
      this.rightScroll = right > 1
      this.leftScroll = left > 1
      // if (isCssSupports('--a', 0)) {
      //   this.$el.style.setProperty('--fixed-left-offset', left + 'px')
      //   this.$el.style.setProperty('--fixed-right-offset', (-right) + 'px')
      // } else { // not use this
      //   let $firsts = $table.getElementsByClassName(this.m(`fixed-left`, 'cell'))
      //   let $lasts = $table.getElementsByClassName(this.m(`fixed-right`, 'cell'))
      //   for (let i = 0; i < $firsts.length; i++) {
      //     let $first = $firsts[i] as HTMLElement
      //     $first.style.transform = `translateX(${left}px)`
      //   }
      //   for (let i = 0; i < $lasts.length; i++) {
      //     let $last = $lasts[i] as HTMLElement
      //     $last.style.transform = `translateX(${-right}px)`
      //   }
      // }
    }

  onResize (e: any) {
      console.log('----')
      console.log(e)
  }
}
</script>
