<template>
    <div :class="[b()]">
        <h3>DatePanel</h3>
    </div>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {Input as VInput} from '../../input'
import {Popper} from '../../popper/index'

@Component({
  components: {VInput, Popper},
  })
export default class DatePanel extends mixins(BemMixin) {
}
</script>
