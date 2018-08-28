<template>
    <ul :class="[b()]"></ul>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator'
import {IconFont} from '../../iconfont'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {IconFont},
  })
export default class Pagination extends BaseComponent {
    bemBlock: string = 'pagination'
}
</script>
