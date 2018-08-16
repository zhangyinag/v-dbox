<template>
<div :class="[b()]">
    <slot></slot>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Bem} from '@/components/bem'

@Component({
  components: {},
  mixins: [Bem],
  })
export default class ButtonGroup extends Vue {
  bemBlock: string = 'button-group'
}
</script>
