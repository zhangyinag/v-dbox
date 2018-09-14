<template>
    <div :class="[b()]"><slot></slot></div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'

@Component({
  components: {},
  })
export default class Checkbox extends mixins(BemMixin) {

}
</script>
