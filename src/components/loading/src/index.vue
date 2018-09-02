<template>
    <div :class="[b()]">
        llll
    </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class Input extends BaseComponent {
    bemBlock: string = 'loading'
}
</script>
