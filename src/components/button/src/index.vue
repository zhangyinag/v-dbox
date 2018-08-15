<template>
    <button :class="[b(), sizeClz, typeClz]"><slot></slot></button>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import {Bem} from '@/components/bem'

@Component({
  components: {},
  mixins: [Bem],
  })
export default class Button extends Vue {
    @Prop(String) size: 'sm' | 'lg';

    @Prop(String) type: 'primary' | 'dashed' | 'danger';

    bemBlock: string = 'button'

    get sizeClz (): string {
      if (!this.size) return ''
      return this.m(this.size)
    }

    get typeClz (): string {
      if (!this.type) return ''
      return this.m(this.type)
    }
}
</script>
