import {Component, Prop, Vue} from 'vue-property-decorator'
import TableColmun from './TableColumn.vue'
import {VNode} from 'vue/types/vnode'
import {CreateElement} from 'vue/types/vue'

@Component({
  components: {},
})
export default class TableCell extends Vue {
  @Prop(Object) row: any

  @Prop() tableColumn: TableColmun

  @Prop(Number) index: number

  render (h: CreateElement): VNode {
    if (this.tableColumn.$scopedSlots.default) {
      return h('div',[
        this.tableColumn.$scopedSlots.default({
          row: this.row,
          $index: this.index
        })
      ])
    } else {
      let prop = (this.tableColumn as any).prop
      return h('div', this.row[prop])
    }
  }
}