<template>
    <div :class="[b(), mBorderedCls]" v-loading="loading">
        <div :class="[e('header')]">
        </div>
        <div :class="[e('body')]" :style="[heightStyle]" @scroll.passive="onScroll" ref="body">
            <table>
                <colgroup>
                    <col :style="[colStyle(col)]" v-for="(col, i) in renderCols" :key="col.prop || col.label || i"/>
                </colgroup>
                <tbody>
                    <template v-for="(row, i) in renderData">
                    <tr :key="i">
                        <td v-for="(col, j) in renderCols" :key="col.prop || col.label || j"
                            :style="[]"
                            v-bind="resolveSpanFn(row, col.prop, i+1, j+1)"
                            v-if="hasCell(row, col.prop, i+1, j+1)"
                            :class="['td', fixedCls(col), scrollCls(col)]">
                            <table-cell :row="row"
                                        :table-column="col"
                                        :index="i"
                                        :expanded="isExpanded(row)"
                                        :selected="hasSelected(row)"
                                        @expand-change="onExpandChange"
                                        @select="val => onRowSelected(row, val)"></table-cell>
                        </td>
                    </tr>
                    <tr :key="'expand' + i" v-if="hasExpandRow && isExpanded(row)" :class="[e('expanded-row')]">
                        <td></td>
                        <td :colspan="renderCols.length - 1">
                            <table-expand-row :row="row" :table-column="expandCol" :index="i"></table-expand-row>
                        </td>
                    </tr>
                   </template>
                </tbody>
                <thead @mousemove="onHeaderMouseMove" @mouseup="onHeaderMouseUp">
                <tr v-for="(row, i) in renderHeaderCols" :key="i">
                    <th v-for="(col, j) in row" :key="col.prop || col.label || j"
                        v-fixed-position=""
                        :colspan="col.col"
                        :rowspan="col.row"
                        :style="[colStyle(col.column)]"
                        :class="['th', fixedCls(col.column), scrollCls(col.column)]"
                        @mousedown="e => onHeaderCellMouseDown(e, col, j)"
                        @mousemove="e => onHeaderCellMouseMove(e, col, j)">
                        <div :class="[e('header-cell'), hasSorterCls(col.column)]" @click="onToggleSort(col.column)">
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
                            <template v-if="col.column.type === 'expand'">
                                <span>+</span>
                            </template>
                            <template v-else>
                                <span>{{col.column.label}}</span>
                                <div :class="[e('header-cell-append')]">
                                    <div v-if="sortableCol(col.column)" :class="[e('sorter')]">
                                        <i class="anticon anticon-caret-up up" :class="[sortOnCls(col.column, true)]" @click.stop="onSort(col.column.prop, 'asc')"></i>
                                        <i class="anticon anticon-caret-down down" :class="[sortOnCls(col.column, false)]" @click.stop="onSort(col.column.prop, 'desc')"></i>
                                    </div>
                                    <div v-if="filterableCol(col.column)" :class="[e('filter'), filterOnCls(col.column.prop)]" @click.stop="()=>{}">
                                        <dropdown trigger="click" @visible-change="val => {onFilterVisibleChange(val, col.column.prop)}">
                                            <i class="anticon anticon-filter" :class="[e('filter-icon')]"></i>
                                            <dropdown-menu slot="dropdown">
                                                <dropdown-item v-for="filter in col.column.filters" :key="filter.value"
                                                               >
                                                    <div @click.stop="()=>{}">
                                                        <checkbox :value="getFilterValues(col.column.prop)"
                                                                  :label="filter.value"
                                                                  @input="val => {setFilterValues(col.column.prop, val)}">{{filter.text}}</checkbox>
                                                    </div>
                                                </dropdown-item>
                                                <v-dropdown-item divider></v-dropdown-item>
                                                <v-dropdown-item>
                                                    <div style="text-align: right;">
                                                        <a @click="doFilter">确定&nbsp;</a>
                                                        <a @click="resetFilter">重置&nbsp;</a>
                                                    </div>
                                                </v-dropdown-item>
                                            </dropdown-menu>
                                        </dropdown>
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
        <div :class="[e('resize-proxy')]" :style="[proxyResizeStyle]" v-show="draggingColIndex !== -1"></div>
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
import TableExpandRow from './TableExpandRow'
import {isFunction, ReactiveSet} from '../../../utils'
import TableColumnGroup from './TableColumnGroup.vue'
import {HeaderCol, RemoteParam, RemoteResult, TableSpanFn, TableFilter, TablePagination, TableSorter} from './type'
import fixedPosition from '../../../core/directives/fixed-position'
import {Pagination} from '../../pagination/index'
import {Checkbox} from '../../checkbox/index'
import {Dropdown, DropdownItem, DropdownMenu} from '../../dropdown/index'
import {LoadingDirective} from '../../loading/index'

const loading = new LoadingDirective()

@Component({
  components: {TableCell, TableExpandRow, Pagination, Checkbox, Dropdown, DropdownMenu, DropdownItem},
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

    @Prop([Function]) spanFn: TableSpanFn

    cols: TableColumn[]| TableColumnGroup[] = []

    leftScroll: boolean = false

    rightScroll: boolean = false

    current: number = 1

    size: number = 10

    selectedKeySet: ReactiveSet<any> = new ReactiveSet()

    sorter: TableSorter| null = null

    filters: TableFilter [] = []

    currentFilter: TableFilter = null

    expandedRowSet: ReactiveSet<any> = new ReactiveSet()

    draggingColIndex: number = -1

    proxyResizeStyle: any = {width: 0}

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
      let localData: any[] = (this.data || []).slice(0)
      if (this.filters && this.filters.length > 0) {
        localData = localData.filter(v => {
          return this.filters.every(filter => {
            if (!filter.values || filter.values.length < 1) return true
            return filter.values.includes(v[filter.prop])
          })
        })
      }
      if (this.sorter) {
        localData.sort((a, b) => {
          return (a[this.sorter.prop] - b[this.sorter.prop]) * (this.sorter.order === 'desc' ? -1 : 1)
        })
      }
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

    get hasExpandRow (): boolean {
      return this.renderCols.some(v => v.type === 'expand')
    }

    get expandCol (): TableColumn {
      return this.renderCols.find(v => v.type === 'expand')
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
      if (col.minWidth) {
        if (!style.width) {
          Object.assign(style, {width: col.minWidth})
        }
        Object.assign(style, {minWidth: col.minWidth})
      }
      return style
    }

    sortOnCls (cell: TableColumn, asc: boolean): string {
      let sorter = this.remoteResult ? this.remoteResult.sorter : this.sorter
      let on = sorter && sorter.prop === cell.prop && sorter.order === (asc ? 'asc' : 'desc')
      return on ? 'on' : ''
    }

    filterOnCls (prop: string): string {
      let filters: TableFilter[] = this.remoteResult ? this.remoteResult.filters : this.filters
      if (!Array.isArray(filters)) return ''
      let on = filters.some(v => {
        return v.prop === prop && (Array.isArray(v.values) && v.values.length > 0)
      })
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

    hasCell (row: any, prop: string, rowIndex: number, colIndex: number): boolean {
      let ret = this.resolveSpanFn(row, prop, rowIndex, colIndex)
      return !!ret.rowspan && !!ret.colspan
    }

    isExpanded (row: any) {
      return this.expandedRowSet.has(this.resolveRowKey(row))
    }

    getFilterValues (prop: string) {
      let filter = this.currentFilter
      if (!filter || !Array.isArray(filter.values) || filter.values.length < 1) return []
      return filter.values
    }

    setFilterValues (prop: string, values: any[]) {
      let filter: TableFilter = this.currentFilter
      if (!filter || !Array.isArray(filter.values) || filter.values.length < 1) {
        this.currentFilter = {prop: prop, values: values}
      } else filter.values = values
    }

    doFilter () {
      let filters: TableFilter[] = this.remoteResult ? [...(this.remoteResult.filters || [])] : this.filters
      let idx = filters.findIndex(v => v.prop === this.currentFilter.prop)
      if (idx === -1) {
        filters.push(this.currentFilter)
      } else {
        filters.splice(idx, 1, this.currentFilter)
      }
      if (this.remoteResult) {
        this.remoteChange(this.generateRemoteParam(undefined, undefined, filters))
      }
    }

    resetFilter () {
      this.currentFilter.values = []
      this.doFilter()
    }

    sortableCol (col: TableColumn) {
      return col.sortable && col.prop
    }

    filterableCol (col: TableColumn) {
      return Array.isArray(col.filters) && col.filters.length > 0
    }

    generateRemoteParam (pagination?: TablePagination, sorter?: TableSorter, filters?: TableFilter[]) : RemoteParam {
      let p = pagination || {currentPage: this.remoteResult.currentPage, pageSize: this.remoteResult.pageSize}
      let s = sorter === undefined ? (this.remoteResult && this.remoteResult.sorter) : sorter
      let f = filters === undefined ? (this.remoteResult && this.remoteResult.filters) : filters
      return {
        ...p,
        sorter: s,
        filters: f
      }
    }

    resolveSpanFn (row: any, prop: string, rowIndex: number, colIndex: number): {rowspan: number, colspan: number} {
      let rowspan = 1
      let colspan = 1
      if (!this.spanFn) return {rowspan, colspan}
      let ret = this.spanFn(row, prop, rowIndex, colIndex)
      if (!ret) return {rowspan, colspan}
      return ret
    }

    onHeaderCellMouseDown (e: MouseEvent, col: TableColumn, index: number) {
      if (!this.bordered) return
      if (e.srcElement.offsetWidth - e.offsetX < 10) {
        this.draggingColIndex = index
      }
    }

    onHeaderCellMouseMove (e: MouseEvent, col: TableColumn, index: number) {
      if (!this.bordered) return
      if (!e.srcElement) return
      if (e.srcElement.offsetWidth - e.offsetX < 10) {
        e.srcElement.classList.add('resize')
      } else {
        e.srcElement.classList.remove('resize')
      }
    }

    onHeaderMouseMove (e: MouseEvent) {
      if (!this.bordered) return
      if (this.draggingColIndex !== -1) {
        console.log(e)
        console.log(e.clientX, this.$el.offsetLeft)
        this.proxyResizeStyle.width = (e.clientX - this.$el.offsetLeft) + 'px'
      }
    }

    onHeaderMouseUp (e: MouseEvent) {
      if (!this.bordered) return
      this.draggingColIndex = -1
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

    onFilterVisibleChange (visible: boolean, prop: string) {
      if (visible) {
        let filters: TableFilter[] = this.remoteResult ? [...(this.remoteResult.filters || [])] : this.filters
        this.currentFilter = filters.find(v => v.prop === prop)
        if (!this.currentFilter) {
          this.currentFilter = {
            prop,
            values: []
          }
        }
      }
    }

    onExpandChange (row: any, expand: boolean) {
      if (expand) {
        this.expandedRowSet.add(this.resolveRowKey(row))
      } else {
        this.expandedRowSet.delete(this.resolveRowKey(row))
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
