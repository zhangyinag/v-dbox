<template>
    <button :class="[b(), sizeCls, typeCls, shapeCls, ghostCls, disabledCls]"
            :disabled="disabled"
            @click="onClick">
        <icon-font :type="iconName" :spin="loading" v-if="iconName"></icon-font>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {Bem} from '@/components/bem'
import {animate} from '../../../utils'
import {IconFont} from '../../iconfont'

@Component({
  components: {IconFont},
  mixins: [Bem],
  })
export default class Button extends Vue {
    @Prop(String) size: 'sm' | 'lg';

    @Prop(String) type: 'primary' | 'dashed' | 'danger';

    @Prop(String) icon: string;

    @Prop(String) shape: 'circle' | 'round';

    @Prop(Boolean) ghost: boolean;

    @Prop(Boolean) disabled: boolean;

    @Prop(Boolean) loading: boolean;

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
      return this.disabled ? 'disabled' : ''
    }

    get iconName (): string {
      if (this.loading) return 'loading'
      return this.icon || ''
    }

    onClick () {
      animate(this.$el, (this as Bem).m('click-animating'), 'buttonEffect')
    }
}
</script>
