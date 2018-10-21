<template>
    <div :class="[b(), mBorderedCls]" v-loading="loading">
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
                            <table-cell :row="row"
                                        :table-column="col"
                                        :index="i"
                                        :selected="hasSelected(row)"
                                        @select="val => onRowSelected(row, val)"></table-cell>
                        </td>
                    </tr>
                </tbody>
                <thead>
                <tr v-for="(row, i) in renderHeaderCols" :key="i">
                    <th v-for="(col, j) in row" :key="col.prop || col.label || j"
                        v-fixed-position=""
                        :colspan="col.col"
                        :rowspan="col.row"
                        :style="[colStyle(col.column)]"
                        :class="['th', fixedCls(col.column), scrollCls(col.column)]">
                        <div :style="[colStyle(col.column)]" :class="[e('header-cell'), hasSorterCls(col.column)]" @click="onToggleSort(col.column)">
                            <template v-if="col.column.type === 'selection'">
                                <checkbox v-bind="allCheckedProp" @input="onAllCheckedChange"></checkbox>
                                <dropdown :class="[e('check-dropdown')]" v-if="Array.isArray(col.column.selections) && col.column.selections.length > 0">
                                    <i class="anticon anticon-down"></i>
                                    <dropdown-menu slot="dropdown">
                                        <dropdown-item v-for="sel in col.column.selections" :key="sel.key"
                                        @click.native="sel.onSelect(selectedKeySet)">{{sel.label}}</dropdown-item>
                                    </dropdown-menu>
                                </dropdown>
                            </template>
                            <template v-else>
                                <span>{{col.column.label}}</span>
                                <div :class="[e('header-cell-append')]">
                                    <div v-if="sortableCol(col.column)" :class="[e('sorter')]">
                                        <i class="anticon anticon-caret-up up" :class="[sortOnCls(col.column, true)]" @click.stop="onSort(col.column.prop, 'asc')"></i>
                                        <i class="anticon anticon-caret-down down" :class="[sortOnCls(col.column, false)]" @click.stop="onSort(col.column.prop, 'desc')"></i>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </th>
                </tr>
                </thead>
            </table>
        </div>
        <div :class="[e('footer')]">
            <pagination v-if="!!pagination" :total="totalNum" :current-page.sync="currentPage" :page-size.sync="pageSize"></pagination>
        </div>
        <div hidden>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Provide, Watch} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import Rippleable from '../../../core/mixins/Rippleable'
import TableColumn from './TableColumn.vue'
import TableCell from './TableCell'
import {isFunction, ReactiveSet} from '../../../utils'
import TableColumnGroup from './TableColumnGroup.vue'
import {HeaderCol, RemoteParam, RemoteResult, TablePagination, TableSorter} from './type'
import fixedPosition from '../../../core/directives/fixed-position'
import {Pagination} from '../../pagination/index'
import {Checkbox} from '../../checkbox/index'
import {Dropdown, DropdownItem, DropdownMenu} from '../../dropdown/index'
import {LoadingDirective} from '../../loading/index'

const loading = new LoadingDirective()

@Component({
  components: {TableCell, Pagination, Checkbox, Dropdown, DropdownMenu, DropdownItem},
  directives: {fixedPosition, loading}
  })
export default class Table extends mixins(BemMixin, Rippleable) {
    @Prop(Array) data: any[]

    @Prop(String) height: string

    @Prop(Boolean) bordered: boolean

    @Prop([Boolean, Object]) pagination: boolean| any

    @Prop(Object) remoteResult: RemoteResult

    @Prop(Boolean) loading: boolean

    @Prop([String, Function]) dataIndex: string| Function

    cols: TableColumn[]| TableColumnGroup[] = []

    leftScroll: boolean = false

    rightScroll: boolean = false

    current: number = 1

    size: number = 10

    selectedKeySet: ReactiveSet<any> = new ReactiveSet()

    sorter: TableSorter| null = null

    get allCheckedProp (): {value: boolean, indeterminate: boolean} {
      let value = !this.renderData.some(v => !this.selectedKeySet.has(this.resolveRowKey(v)))
      let indeterminate = !value && this.renderData.some(v => this.selectedKeySet.has(this.resolveRowKey(v)))
      return {value, indeterminate}
    }

    get totalNum () {
      if (this.remoteResult) { // remote
        return this.remoteResult.total
      }
      return (this.data && this.data.length) || 0
    }

    get currentPage () {
      if (this.remoteResult) return this.remoteResult.currentPage
      return this.current
    }

    get pageSize () {
      if (this.remoteResult) return this.remoteResult.pageSize
      return this.size
    }

    set currentPage (currentPage: number) {
      if (this.remoteResult) {
        this.remoteChange(this.generateRemoteParam({currentPage, pageSize: this.remoteResult.pageSize}, undefined))
        return
      }
      this.current = currentPage
    }

    set pageSize (pageSize: number) {
      if (this.remoteResult) {
        this.remoteChange(this.generateRemoteParam({currentPage: this.remoteResult.currentPage, pageSize}, undefined))
        return
      }
      this.size = pageSize
    }

    get renderCols (): TableColumn [] {
      let ret: TableColumn [] = []
      traverse(this.cols)
      return ret
      function traverse (cols: TableColumn[] | TableColumnGroup[]) {
        if (!Array.isArray(cols) || cols.length < 1) return
        cols.forEach(col => {
          if (col.constructor.name === 'TableColumn') ret.push(col)
          else traverse(col.cols)
        })
      }
    }

    get renderHeaderCols (): HeaderCol[][] {
      let headerCols: HeaderCol[] = []
      let ret: HeaderCol[][] = []
      let maxLevel = 0
      traverse(this.cols, 0)
      headerCols.forEach(col => {
        if (col.column.constructor.name === 'TableColumn') {
          col.row = maxLevel + 1 - col.level
        }
        (ret[col.level] || (ret[col.level] = [])).push(col)
      })
      return ret
      function traverse (cols: TableColumnGroup[] | TableColumn[], level: number): number {
        if (level > maxLevel) maxLevel = level
        let colCount = 0
        if (!Array.isArray(cols) || cols.length < 1) return colCount
        cols.forEach(col => {
          if (col.constructor.name === 'TableColumn') {
            headerCols.push(new HeaderCol(col, level, 1, 1))
            colCount++
          } else {
            let headerCol = new HeaderCol(col, level, 1, 1)
            headerCols.push(headerCol)
            let currColCount = traverse(col.cols, level + 1)
            colCount += currColCount
            headerCol.col = currColCount
          }
        })
        return colCount
      }
    }

    get localData () { // get for data
      if (!this.sorter) return this.data
      let localData: any[] = (this.data || []).slice(0)
      localData.sort((a, b) => {
        return (a[this.sorter.prop] - b[this.sorter.prop]) * (this.sorter.order === 'desc' ? -1 : 1)
      })
      return localData
    }

    get renderData (): any[] {
      if (this.remoteResult) {
        return this.remoteResult.data
      }
      if (!this.localData) return []
      let start = (this.currentPage - 1) * this.pageSize
      if (this.pagination) return this.localData.slice(start, start + this.pageSize)
      return this.localData.slice(0)
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
        Object.assign(style, {width: col.width}, {top: 'inherit'})
      }
      return style
    }

    sortOnCls (cell: TableColumn, asc: boolean): string {
      let sorter = this.remoteResult ? this.remoteResult.sorter : this.sorter
      let on = sorter && sorter.prop === cell.prop && sorter.order === (asc ? 'asc' : 'desc')
      return on ? 'on' : ''
    }

    // headRowStyle (col: HeaderCol) {
    //   const $body = this.$refs.body
    //   if (!$body) return {}
    //   console.log(JSON.stringify(this.$refs))
    //   let top = (this.$refs.headRows || [])
    //     .filter((v, i) => i < col.level)
    //     .map(v => v.offsetHeight)
    //     .reduce((acc, cur) => {
    //       return acc + cur
    //     }, 0)
    //   return { top: top + 'px' }
    //
    //   function toArray (nodeList: NodeList) {
    //     let array = []
    //     nodeList.forEach(v => array.push(v))
    //     return array
    //   }
    // }

    hasSorterCls (col: TableColumn) {
      return this.sortableCol(col) ? this.m('has-sorter', 'header-cell'): ''
    }

    @Provide() addCol (col: TableColumn| TableColumnGroup) {
      if (!this.cols.includes(col)) this.cols.push(col)
    }

    @Provide() removeCol (col: TableColumn| TableColumnGroup) {
      let idx = this.cols.indexOf(col)
      if (idx !== -1) this.cols.splice(idx, 1)
    }

    @Emit() remoteChange (param: RemoteParam) {}

    resolveRowKey (val: any) {
      if (!this.dataIndex) return val
      if (isFunction(this.dataIndex)) return (this.dataIndex as Function)(val)
      return val[this.dataIndex]
    }

    hasSelected (row: any) {
      return this.selectedKeySet.has(this.resolveRowKey(row))
    }

    sortableCol (col: TableColumn) {
      return col.sortable && col.prop
    }

    generateRemoteParam (pagination?: TablePagination, sorter?: TableSorter) : RemoteParam {
      let p = pagination || {currentPage: this.remoteResult.currentPage, pageSize: this.remoteResult.pageSize}
      let s = sorter === undefined ? (this.remoteResult.sorter && this.remoteResult.sorter) : sorter
      return {
        ...p,
        sorter: s
      }
    }

    onRowSelected (row, selected) {
      if (selected) this.selectedKeySet.add(this.resolveRowKey(row))
      else this.selectedKeySet.delete(this.resolveRowKey(row))
    }

    onAllCheckedChange (checked) {
      this.renderData.forEach(v => {
        if (checked) this.selectedKeySet.add(this.resolveRowKey(v))
        else this.selectedKeySet.delete(this.resolveRowKey(v))
      })
    }

    onSort (prop: string, order: 'asc' | 'desc') {
      let sorter: TableSorter = null
      if (order && prop) {
        sorter = {
          prop, order
        }
      }

      if (this.remoteResult) {
        this.remoteChange(this.generateRemoteParam(undefined, sorter))
      } else {
        this.sorter = sorter
      }
    }

    onToggleSort (col: TableColumn) {
      if (!this.sortableCol(col)) return
      let prop = col.prop
      let sorter = this.remoteResult ? this.remoteResult.sorter : this.sorter
      if (sorter && sorter.prop === prop) {
        if (sorter.order === 'desc') sorter = null
        else {
          sorter = {
            prop,
            order: 'desc'
          }
        }
      } else {
        sorter = {
          prop,
          order: 'asc'
        }
      }
      if (this.remoteResult) {
        this.remoteChange(this.generateRemoteParam(undefined, sorter))
      } else {
        this.sorter = sorter
      }
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
}
</script>
