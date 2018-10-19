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
    let data: any = {}
    // under auto layout, width won't work at td, set width to child of td
    // let width = (this.tableColumn as any).width
    // if (width) {
    //   data.style = {
    //     width
    //   }
    // }
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
