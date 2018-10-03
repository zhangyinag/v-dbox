<template>
    <ul :class="[b()]">
        <li :class="[e('item'), m('prev', 'item')]" tabindex="0"><i class="anticon anticon-left"></i></li>
        <li :class="[e('item')]" v-for="(item, i) in items" :key="i" tabindex="0">
            <i class="anticon anticon-ellipsis" v-if="item.type === 'ellipsis'"></i>
            <span v-else>{{item.index}}</span>
        </li>
        <li :class="[e('item'), m('next', 'item')]" tabindex="0"><i class="anticon anticon-right"></i></li>
    </ul>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import {Primitive} from '../../../core/type'
import Rippleable from '../../../core/mixins/Rippleable'
import {Item} from './type'
import {range} from '../../../utils'

@Component({
  components: {IconFont},
  })
export default class Pagination extends mixins(BemMixin, Rippleable) {
  @Prop({type: Number, default: 0}) total: number

  @Prop({type: Number, default: 1}) currentPage: number

  @Prop({type: Number, default: 10}) pageSize: number

  itemCount: number = 5 // make sure it's odd number

  @Emit('update:currentPage') currentPageUpdate (currentPage: number) {}

  @Emit('update:pageSize') pageSizeUpdate (pageSize: number) {}

  get items (): Item[] {
    let ret: Item[] = []
    let pageCount = Math.ceil(this.total / this.pageSize)
    if (pageCount <= this.itemCount) return range(1, 5).map(v => new Item(v))
    let interval = Math.floor(this.itemCount / 2)
    let start: number = this.currentPage - interval <= 1 ? 1 : this.currentPage - interval
    let end: number = this.currentPage + interval >= pageCount ? pageCount : this.currentPage + interval
    let startItems: Item[] = []
    let endItems: Item[] = []
    if (this.currentPage - this.itemCount <= 1) start = 1
    else startItems.push(new Item(1), new Item(5, 'ellipsis'))
    if (pageCount - this.itemCount < this.currentPage) end = pageCount
    else endItems.push(new Item(-5, 'ellipsis'), new Item(pageCount))
    // at least have 4 items
    if (start === 1 && end - start < (this.itemCount - 2)) end = start + this.itemCount - 2
    if (end === pageCount && end - start < (this.itemCount - 2)) start = end - this.itemCount + 2
    ret.push(...startItems, ...range(start, end).map(v => new Item(v)), ...endItems)
    return ret
  }
}
</script>
