<template>
    <div :class="[b()]">
        <slot> </slot>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Inject} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import Rippleable from '../../../core/mixins/Rippleable'

@Component({
  components: {},
  })
export default class TableColumn extends mixins(BemMixin, Rippleable) {
    @Prop(String) prop: string

    @Prop(String) label: string

    @Prop(String) fixed: 'left' | 'right'

    @Prop(String) width: string

    @Inject() addCol: (col: TableColumn) => void

    @Inject() removeCol: (col: TableColumn) => void

    mounted () {
      this.addCol(this)
    }

    beforeDestroy () {
      this.removeCol(this)
    }
}
</script>
