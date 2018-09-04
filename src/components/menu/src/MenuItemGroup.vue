<template>
<li :class="[b()]">
    <span :class="[e('title')]"><slot name="title"></slot></span>
    <ul><slot></slot></ul>
</li>
</template>

<script lang="ts">
import {Component, Emit, Inject, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class MenuItemGroup extends BaseComponent {
  bemBlock: string = 'menu-item-group'
}
</script>
