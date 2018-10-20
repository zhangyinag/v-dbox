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
}

export class RemoteParam {
  constructor (public currentPage: number, public pageSize: number) {}
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
