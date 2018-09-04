<template>
    <div :class="[b()]">
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'

@Component({
  components: {IconFont},
  })
export default class Select extends BaseComponent {
  bemBlock: string = 'select-dropdown'
}
</script>
