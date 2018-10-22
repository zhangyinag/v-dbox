import TableColumn from './TableColumn.vue'
import TableColumnGroup from './TableColumnGroup.vue'
import {Primitive} from '@/core/type'
import {ReactiveSet} from '@/utils'

export class HeaderCol {
  constructor (public column: TableColumn | TableColumnGroup, public level: number, public row: number, public col: number) {}
}

export class RemoteResult {
  data: any[]
  total: number
  currentPage: number
  pageSize: number
  sorter?: TableSorter
  filters?: TableFilter[]
}

export class RemoteParam {
  constructor (public currentPage: number, public pageSize: number, public sorter?: TableSorter, public filters?: TableFilter[]) {}
}

export type TableColumnType = 'selection'

export interface TableColumnSelection {
  key: Primitive,
  label: string,
  onSelect: (selectedKeySet: ReactiveSet<any>) => any
}

export interface TableSorter {
  prop: string,
  order: 'desc' | 'asc'
}

export interface TablePagination {
  currentPage: number
  pageSize: number
  total?: number
}

export interface TableFilter {
  prop: string
  values: any[]
}

export interface TableColumnFilter {
  text?: string
  value: any
}


export interface TableSpanFn {
  (row: any, prop: string, rowIndex: number, colIndex: number): {rowspan: number, colspan: number}
}