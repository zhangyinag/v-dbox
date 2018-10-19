import TableColumn from './TableColumn.vue'
import TableColumnGroup from './TableColumnGroup.vue'

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
