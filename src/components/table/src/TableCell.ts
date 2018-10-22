import {Component, Prop, Emit, Vue} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'

import TableColumn from './TableColumn.vue'
import {VNode} from 'vue/types/vnode'
import {CreateElement} from 'vue/types/vue'
import {Checkbox} from '../../checkbox'
import {Tooltip} from '../../tooltip'
import BemMixin from '@/core/mixins/BemMixin'

@Component({
  components: {Checkbox, Tooltip},
  })
export default class TableCell extends mixins(BemMixin) {
  @Prop(Object) row: any

  @Prop() tableColumn: TableColumn

  @Prop(Number) index: number

  @Prop(Boolean) selected: boolean

  @Prop(Boolean) expanded: boolean

  toolTipEnable: boolean = false

  @Emit() select (selected: boolean) {}

  @Emit() expandChange (row: any, expanded: boolean) {}

  get expandedCls () {
    return this.expanded ? 'expanded' : ''
  }

  singleLineCls (col: TableColumn) {
    return !(col as any).singleLine ? '' : this.m(`single-line`, 'cell-content', 'table')
  }

  onToggleExpandRow () {
    this.expandChange(this.row, !this.expanded)
  }

  render (h: CreateElement): VNode {
    let vm = this
    let data: any = {
      class: [this.e('cell-content', 'table'), this.singleLineCls(this.tableColumn)]
    }
    // under auto layout, width won't work at td, set width to child of td
    let width = (this.tableColumn as any).width
    if (width) {
      data.style = {
        width
      }
    }
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

    if ((this.tableColumn as any).singleLine) {
      return h('tooltip', {props: {disabled: !this.toolTipEnable}}, [renderNormalContent(), renderNormalContent(true)])
    } else {
      return renderNormalContent()
    }

    function renderNormalContent (isContent?: boolean): VNode {
      let d = Object.assign({ref: 'content'}, data)
      if (isContent) d = Object.assign({}, data, {slot: 'content', class: [vm.e('cell-content', 'table'), vm.m('tooltip', 'cell-content', 'table')]})
      if (vm.tableColumn.$scopedSlots.default) {
        return h('div', d, [
          vm.tableColumn.$scopedSlots.default({
            row: vm.row,
            $index: vm.index
          })
        ])
      } else {
        let prop = (vm.tableColumn as any).prop
        return h('div', d, vm.row[prop])
      }
    }
  }

  mounted () {
    const $content : HTMLElement = this.$refs.content as HTMLElement
    if ($content) {
      if ($content.offsetWidth < $content.scrollWidth) this.toolTipEnable = true
      else this.toolTipEnable = false
    }
  }

  updated () {
    this.$nextTick().then(() => {
      const $content : HTMLElement = this.$refs.content as HTMLElement
      if ($content) {
        if ($content.offsetWidth < $content.scrollWidth) this.toolTipEnable = true
        else this.toolTipEnable = false
      }
    })
  }
}
