import {Component, Prop, Emit, Vue} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'

import TableColmun from './TableColumn.vue'
import {VNode} from 'vue/types/vnode'
import {CreateElement} from 'vue/types/vue'
import {Checkbox} from '../../checkbox'
import BemMixin from '@/core/mixins/BemMixin'

@Component({
  components: {Checkbox},
  })
export default class TableCell extends mixins(BemMixin) {
  @Prop(Object) row: any

  @Prop() tableColumn: TableColmun

  @Prop(Number) index: number

  @Prop(Boolean) selected: boolean

  @Prop(Boolean) expanded: boolean

  @Emit() select (selected: boolean) {}

  @Emit() expandChange (row: any, expanded: boolean) {}

  get expandedCls () {
    return this.expanded ? 'expanded' : ''
  }

  onToggleExpandRow () {
    this.expandChange(this.row, !this.expanded)
  }

  render (h: CreateElement): VNode {
    let data: any = {}
    // under auto layout, width won't work at td, set width to child of td
    // let width = (this.tableColumn as any).width
    // if (width) {
    //   data.style = {
    //     width
    //   }
    // }
    if ((this.tableColumn as any).type === 'selection') {
      return h('checkbox', {
        props: {
          value: this.selected
        },
        on: {
          input: this.select
        }
      })
    }
    if ((this.tableColumn as any).type === 'expand') {
      return h('span', {
        'class': [this.e('row-expand-icon', 'table'), this.expandedCls],
        on: {
          click: this.onToggleExpandRow
        }
      })
    }
    if (this.tableColumn.$scopedSlots.default) {
      return h('div', data, [
        this.tableColumn.$scopedSlots.default({
          row: this.row,
          $index: this.index
        })
      ])
    } else {
      let prop = (this.tableColumn as any).prop
      return h('div', data, this.row[prop])
    }
  }
}
