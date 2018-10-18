<template>
    <div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Inject, Provide} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import Rippleable from '../../../core/mixins/Rippleable'
import TableColumn from './TableColumn.vue'

@Component({
  components: {},
  })
export default class TableColumnGroup extends mixins(BemMixin, Rippleable) {
  @Prop(String) label: string

  cols: TableColumn[]| TableColumnGroup[] = []

  @Provide() addCol (col: TableColumn| TableColumnGroup) {
    if (!this.cols.includes(col)) this.cols.push(col)
  }

  @Provide() removeCol (col: TableColumn| TableColumnGroup) {
    let idx = this.cols.indexOf(col)
    if (idx !== -1) this.cols.splice(idx, 1)
  }

  @Inject({from: 'addCol'}) addColGroup: (col: TableColumnGroup) => void

  @Inject({from: 'removeCol'}) removeColGroup: (col: TableColumnGroup) => void

  beforeMount () {
    this.addColGroup(this)
  }

  beforeDestroy () {
    this.removeColGroup(this)
  }
}
</script>
