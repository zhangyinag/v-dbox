<template>
    <div :class="[b()]">
        <span :class="e('arrow')"><icon-font type="up"></icon-font></span>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'
import {IconFont} from '../../iconfont/index'

@Component({
  components: {IconFont},
  })
export default class SelectSelection extends BaseComponent {
  bemBlock: string = 'select-selection'
}
</script>
