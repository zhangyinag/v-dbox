<template>
    <button :class="[b(), sizeCls, typeCls, shapeCls, ghostCls]"
            @click="onClick">
        <icon-font :type="icon" v-if="icon"></icon-font>
        <slot></slot>
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

    @Prop(String) shape: 'circle';

    @Prop(Boolean) ghost: boolean;

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

    onClick () {
      console.log(this.$el)
      animate(this.$el, (this as Bem).m('click-animating'), 'buttonEffect')
    }
}
</script>
