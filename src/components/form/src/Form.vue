<template>
    <form>

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
export default class Form extends mixins(BemMixin) {
}
</script>
