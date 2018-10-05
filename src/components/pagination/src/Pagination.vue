<template>
    <ul :class="[b()]">
        <li :class="[e('item-base')]">共 {{total}} 条</li>
        <li :class="[e('item'), activePrevItemCls]" tabindex="0" @click="toPage(currentPage - 1)"><i class="anticon anticon-left"></i></li>
        <li :class="[e('item'), activeItemCls(item), mItemCls(item)]" :title="itemTitle(item)" tabindex="0"
            v-for="item in items"
            :key="item.type + item.index"
            @click="toPage(item)">
            <i class="anticon" v-if="item.type === 'ellipsis'"></i>
            <span v-else>{{item.index}}</span>
        </li>
        <li :class="[e('item'), activeNextItemCls]" tabindex="0" @click="toPage(currentPage + 1)"><i class="anticon anticon-right"></i></li>
        <li :class="[e('item-base')]">
            <v-select style="width: 100px;" v-model="pageSizeModel">
                <v-option :label="10">10条/页</v-option>
                <v-option :label="20">20条/页</v-option>
                <v-option :label="30">30条/页</v-option>
                <v-option :label="40">40条/页</v-option>
                <v-option :label="50">50条/页</v-option>
                <v-option :label="100">100条/页</v-option>
            </v-select>
        </li>
        <li :class="[e('item-base')]">跳至 <v-input v-model.number="page" style="width: 60px;" @change="toPage(page)"></v-input> 页</li>
    </ul>
</template>

<script lang="ts">
import {Component, Emit, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Select as VSelect, Option as VOption} from '../../select'
import {Input as VInput} from '../../input'
import Rippleable from '../../../core/mixins/Rippleable'
import {Item} from './type'
import {isString, range} from '../../../utils'

@Component({
  components: {VSelect, VOption, VInput},
  })
export default class Pagination extends mixins(BemMixin, Rippleable) {
  @Prop({type: Number, default: 0}) total: number

  @Prop({type: Number, default: 1}) currentPage: number

  @Prop({type: Number, default: 10}) pageSize: number

  itemCount: number = 5 // make sure it's odd number

  page: number = null

  @Emit('update:currentPage') currentPageUpdate (currentPage: number) {}

  @Emit('update:pageSize') pageSizeUpdate (pageSize: number) {}

  get pageCount (): number {
    return Math.ceil(this.total / this.pageSize)
  }

  get items (): Item[] {
    let ret: Item[] = []
    let pageCount = Math.ceil(this.total / this.pageSize)
    if (pageCount <= this.itemCount) return range(1, pageCount).map(v => new Item(v))
    let interval = Math.floor(this.itemCount / 2)
    let start: number = this.currentPage - interval <= 1 ? 1 : this.currentPage - interval
    let end: number = this.currentPage + interval >= pageCount ? pageCount : this.currentPage + interval
    let startItems: Item[] = []
    let endItems: Item[] = []
    if (this.currentPage - this.itemCount < 0) start = 1
    else startItems.push(new Item(1), new Item(-5, 'ellipsis'))
    if (pageCount - this.itemCount < this.currentPage) end = pageCount
    else endItems.push(new Item(5, 'ellipsis'), new Item(pageCount))
    // at least have 4 items
    if (start === 1 && end - start < (this.itemCount - 2)) end = start + this.itemCount - 2
    if (end === pageCount && end - start < (this.itemCount - 2)) start = end - this.itemCount + 2
    ret.push(...startItems, ...range(start, end).map(v => new Item(v)), ...endItems)
    return ret
  }

  get pageSizeModel (): number {
    return this.pageSize
  }

  set pageSizeModel (pageSize) {
    this.pageSizeUpdate(pageSize)
  }

  get activePrevItemCls () {
    return this.currentPage > 1 ? '' : this.m('disabled', 'item')
  }

  get activeNextItemCls () {
    return this.currentPage < this.pageCount ? '' : this.m('disabled', 'item')
  }

  activeItemCls (item: Item) {
    return item.type === 'number' && item.index === this.currentPage ? this.m('active', 'item') : ''
  }

  mItemCls (item: Item) {
    if (item.type === 'number') return this.m(item.index + '', 'item')
    return this.m(item.index > 0 ? 'next': 'prev', 'item')
  }

  itemTitle (item: Item): string {
    if (item.type === 'number') return item.index + ''
    return item.index > 0 ? `向后 ${item.index} 页` : `向前 ${-item.index} 页`
  }

  toPage (item: number| Item) {
    if (isString(item)) return
    let page = 1
    if (Number.isInteger(item as number)) {
      page = item as number
    } else {
      let i = item as Item
      if (i.type === 'number') page = i.index
      else page = this.currentPage + i.index
    }
    if (page < 1) {
      this.currentPageUpdate(1)
      return
    }
    if (page > this.pageCount) {
      this.currentPageUpdate(this.pageCount)
      return
    }
    this.currentPageUpdate(page)
  }
}
</script>
