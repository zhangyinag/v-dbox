<template>
    <form :class="[b()]">

    </form>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'

@Component({
  components: {IconFont},
  })
export default class FormItem extends mixins(BemMixin) {
}
</script>
