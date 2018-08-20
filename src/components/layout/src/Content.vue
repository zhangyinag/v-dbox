<template>
    <div :class="[b()]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Content extends BaseComponent {
    bemBlock: string = 'content'
}
</script>
