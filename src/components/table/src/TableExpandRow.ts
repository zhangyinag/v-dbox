import {Component, Prop, Vue} from 'vue-property-decorator'
import TableColmun from './TableColumn.vue'
import {VNode} from 'vue/types/vnode'
import {CreateElement} from 'vue/types/vue'

@Component({
  components: {},
  })
export default class TableExpandRow extends Vue {
  @Prop(Object) row: any

  @Prop() tableColumn: TableColmun

  @Prop(Number) index: number

  render (h: CreateElement): VNode {
    let data: any = {}
    return h('div', data, [
      this.tableColumn.$scopedSlots.default({
        row: this.row,
        $index: this.index
      })
    ])
  }
}
