<template>
    <div :class="[b()]">
        <div :class="[e('header')]">
        </div>
        <div :class="[e('body')]">
            <table>
                <thead>
                <tr>
                    <th v-for="(col, i) in renderCols" :key="col.prop || col.label || i">{{col.label}}</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, i) in renderData" :key="i">
                        <td v-for="(col, j) in renderCols" :key="col.prop || col.label || j">
                            <table-cell :row="row" :table-column="col"></table-cell>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div :class="[e('footer')]"></div>
        <div hidden>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Provide} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import Rippleable from '../../../core/mixins/Rippleable'
import TableColumn from './TableColumn.vue'
import TableCell from './TableCell'

@Component({
  components: {TableCell},
  })
export default class Table extends mixins(BemMixin, Rippleable) {
    @Prop(Array) data: any[]

    cols: TableColumn[] = []

    get renderCols (): TableColumn [] {
      return this.cols
    }

    get renderData (): any[] {
      return this.data || []
    }

    @Provide() addCol (col: TableColumn) {
      if (!this.cols.includes(col)) this.cols.push(col)
    }

    @Provide() removeCol (col: TableColumn) {
      let idx = this.cols.indexOf(col)
      if (idx !== -1) this.cols.splice(idx, 1)
    }
}
</script>
