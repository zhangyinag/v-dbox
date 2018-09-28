<template>
    <span>
        <ul :class="[b(), readonlyCls]" tabindex="0">
            <li :class="[e('star'), starCls(star)]" v-for="star in stars" :key="star" tabindex="0">
                <div :class="[e('star-first')]"
                     @click="onSelect(star - 0.5)"
                     @mouseover="onHover(star - 0.5)"
                     @mouseout="onOut">
                    <icon-font :type="icon"></icon-font>
                </div>
                <div :class="[e('star-second')]"
                     @click="onSelect(star)"
                     @mouseover="onHover(star)"
                     @mouseout="onOut">
                    <icon-font :type="icon"></icon-font>
                </div>
            </li>
        </ul>
        <span :class="[e('text')]"><slot></slot></span>
    </span>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'

@Component({
  components: {IconFont},
  })
export default class Rate extends mixins(BemMixin) {
  @Prop(Number) @Model('input') value!: number

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) clearable: boolean

  @Prop(Boolean) allowHalf: boolean

  @Prop(Boolean) readonly: boolean

  @Prop({type: String, default: 'star'}) icon: string

  stars: number = 5

  hoverStar: number = 0

  get readonlyCls (): string {
    return !this.readonly ? '' : 'readonly'
  }

  @Emit() input (star: number) {}

  starCls (star: number): string {
    let current = this.hoverStar || this.value || 0
    if (!current || current <= 0) return ''
    if (current >= star) return this.m('full', 'star')
    if (current <= star - 1) return ''
    return this.m('half', 'star')
  }

  onSelect (star: number) {
    let value = this.allowHalf ? star : Math.ceil(star)
    if (this.clearable && value === this.value) {
      this.hoverStar = 0
      this.input(0)
    } else this.input(value)
  }

  onHover (star: number) {
    this.hoverStar = this.allowHalf ? star : Math.ceil(star)
  }

  onOut () {
    this.hoverStar = 0
  }
}
</script>
