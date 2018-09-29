<template>
    <span :class="[b(), mCheckedCls, mDisabledCls, mLoadingCls]" tabindex="0" @click="toggle" @keyup.enter="toggle" v-ripple="ripple">
        <span :class="[e('dot')]"><icon-font type="loading" v-if="loading" spin></icon-font></span>
        <span :class="[e('text')]">{{text}}</span>
    </span>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import {Primitive} from '../../../core/type'
import Rippleable from '../../../core/mixins/Rippleable'

@Component({
  components: {IconFont},
  })
export default class Switch extends mixins(BemMixin, Rippleable) {
  @Prop() @Model('input') value!: Primitive

  @Prop(Boolean) disabled!: boolean

  @Prop(Boolean) loading!: boolean

  @Prop() activeValue!: Primitive

  @Prop() inactiveValue!: Primitive

  @Prop(String) activeText!: string

  @Prop(String) inactiveText!: string

  @Emit() input (value: Primitive) {}

  get checked () {
    if (this.activeValue) return this.activeValue === this.value
    if (this.inactiveValue) return this.inactiveValue !== this.value
    return !!this.value
  }

  get text (): string {
    return this.checked ? this.activeText : this.inactiveText
  }

  get mCheckedCls (): string {
    return !this.checked ? '' : this.m('checked')
  }

  get mDisabledCls (): string {
    return !this.disabled ? '' : this.m('disabled')
  }

  get mLoadingCls (): string {
    return !this.loading ? '' : this.m('loading')
  }

  toggle () {
    let value = null
    if (this.checked) value = this.inactiveValue || false
    else value = this.activeValue || true
    this.input(value)
  }
}
</script>
