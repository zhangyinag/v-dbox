<template>
    <button :class="[b(), sizeCls, typeCls, shapeCls, ghostCls, disabledCls, loadingCls, iconCls, blockCls]"
            :disabled="disabled"
            @click="onClick">
        <icon-font :type="iconName" :spin="loading" v-if="iconName"></icon-font>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script lang="ts">
import {Component, Emit, Prop} from 'vue-property-decorator'
import {animate, debounce} from '../../../utils'
import {IconFont} from '../../iconfont'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {IconFont},
  })
export default class Button extends BaseComponent {
    @Prop(String) size: 'sm' | 'lg';

    @Prop(String) type: 'primary' | 'dashed' | 'danger' | 'text';

    @Prop(String) icon: string;

    @Prop(String) shape: 'circle' | 'round';

    @Prop(Boolean) ghost: boolean;

    @Prop(Boolean) disabled: boolean;

    @Prop(Boolean) loading: boolean;

    @Prop(Boolean) block: boolean;

    @Prop({type: Number, default: -1}) delay: number;

    bemBlock: string = 'button'

    get sizeCls (): string {
      if (!this.size) return ''
      return this.m(this.size)
    }

    get typeCls (): string {
      if (!this.type) return ''
      return this.m(this.type)
    }

    get shapeCls (): string {
      if (!this.shape) return ''
      return this.m(this.shape)
    }

    get ghostCls (): string {
      if (!this.ghost) return ''
      return this.m('ghost')
    }

    get disabledCls (): string {
      return this.disabled ? this.s('disabled') : ''
    }

    get loadingCls (): string {
      return this.loading ? this.s('loading') : ''
    }

    get iconCls (): string {
      return this.icon ? this.s('icon') : ''
    }

    get blockCls (): string {
      return this.block ? this.m('block') : ''
    }

    get iconName (): string {
      if (this.loading) return 'loading'
      return this.icon || ''
    }

    get delayClick () {
      return debounce(this.click, this.delay, this)
    }

    @Emit('click') click () {}

    onClick () {
      if (this.delay === -1) {
        this.click()
      } else {
        this.delayClick()
      }
      animate(this.$el, this.m('click-animating'), 'buttonEffect')
    }
}
</script>
