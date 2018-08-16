<template>
    <button :class="[b(), sizeCls, typeCls, shapeCls, ghostCls, disabledCls, loadingCls, iconCls, blockCls]"
            :disabled="disabled"
            @click="onClick">
        <icon-font :type="iconName" :spin="loading" v-if="iconName"></icon-font>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
import {Bem} from '@/components/bem'
import {animate, debounce} from '../../../utils'
import {IconFont} from '../../iconfont'

@Component({
  components: {IconFont},
  mixins: [Bem],
  })
export default class Button extends Vue {
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
      return (this as Bem).m(this.size)
    }

    get typeCls (): string {
      if (!this.type) return ''
      return (this as Bem).m(this.type)
    }

    get shapeCls (): string {
      if (!this.shape) return ''
      return (this as Bem).m(this.shape)
    }

    get ghostCls (): string {
      if (!this.ghost) return ''
      return (this as Bem).m('ghost')
    }

    get disabledCls (): string {
      return this.disabled ? (this as Bem).s('disabled') : ''
    }

    get loadingCls (): string {
      return this.loading ? (this as Bem).s('loading') : ''
    }

    get iconCls (): string {
      return this.icon ? (this as Bem).s('icon') : ''
    }

    get blockCls (): string {
      return this.block ? (this as Bem).m('block') : ''
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
      animate(this.$el, (this as Bem).m('click-animating'), 'buttonEffect')
    }
}
</script>
