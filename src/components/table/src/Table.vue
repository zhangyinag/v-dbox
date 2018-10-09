<template>
    <div :class="[b()]">
        <div :class="[e('header')]">
        </div>
        <div :class="[e('body')]" :style="[heightStyle]" @scroll="onScroll" ref="body">
            <table>
                <colgroup>
                    <col v-for="(col, i) in renderCols" :key="col.prop || col.label || i" :style="[colStyle(col)]"/>
                </colgroup>
                <thead>
                <tr>
                    <th v-for="(col, i) in renderCols" :key="col.prop || col.label || i">{{col.label}}</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, i) in renderData" :key="i">
                        <td v-for="(col, j) in renderCols" :key="col.prop || col.label || j" :class="[fixedCls(col)]">
                            <table-cell :row="row" :table-column="col" :index="i"></table-cell>
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
  directives: {}
  })
export default class Table extends mixins(BemMixin, Rippleable) {
    @Prop(Array) data: any[]

    @Prop(String) height: string

    cols: TableColumn[] = []

    get renderCols (): TableColumn [] {
      return this.cols
    }

    get renderData (): any[] {
      return this.data || []
    }

    get heightStyle () {
      if (!this.height) return {}
      return {
        height: this.height
      }
    }

    fixedCls (col: TableColumn) {
      if (!col.fixed) return ''
      return this.m(`fixed-${col.fixed}`, 'cell')
    }

    colStyle (col: TableColumn) {
      let style: any = {}
      if (col.width) {
        Object.assign(style, {width: col.width})
      }
      return style
    }

    @Provide() addCol (col: TableColumn) {
      if (!this.cols.includes(col)) this.cols.push(col)
    }

    @Provide() removeCol (col: TableColumn) {
      let idx = this.cols.indexOf(col)
      if (idx !== -1) this.cols.splice(idx, 1)
    }

    onScroll () {
      const $wrapper = this.$refs.body as HTMLElement
      let $head = $wrapper.querySelector('thead')
      let $table = $wrapper.querySelector('table')
      let $firsts = $table.getElementsByClassName(this.m(`fixed-left`, 'cell'))
      let $lasts = $table.getElementsByClassName(this.m(`fixed-right`, 'cell'))
      $head.style.transform = `translateY(${$wrapper.scrollTop}px)`
      for (let i = 0; i < $firsts.length; i++) {
        let $first = $firsts[i] as HTMLElement
        $first.style.transform = `translateX(${$wrapper.scrollLeft}px)`
        if ($wrapper.scrollLeft > 1) $first.classList.add('scroll')
        else $first.classList.remove('scroll')
      }
      for (let i = 0; i < $lasts.length; i++) {
        let $last = $lasts[i] as HTMLElement
        let offset = $wrapper.scrollWidth - $wrapper.scrollLeft - $wrapper.clientWidth
        $last.style.transform = `translateX(${-offset}px)`
        if (offset > 1) $last.classList.add('scroll')
        else $last.classList.remove('scroll')
      }
    }
}
</script>
