<template>
    <li :class="[b()]">
        <div :class="e('title')">{{label}}</div>
        <ul :class="e('list')"><slot></slot></ul>
    </li>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import BaseComponent from '../../../core/BaseComponent'

@Component({
  components: {},
  })
export default class OptionGroup extends BaseComponent {
  @Prop(String) label: string

  bemBlock: string = 'option-group'
}
</script>
