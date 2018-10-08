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

  render (h: CreateElement): VNode {
    if (this.tableColumn.$slots.default) {
      return h('div',{}, this.tableColumn.$slots.default as any)
    } else {
      let prop = (this.tableColumn as any).prop
      return h('div', this.row[prop])
    }
  }
}