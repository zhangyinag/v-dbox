<template>
    <popper :class="[b()]"
            :trigger="trigger"
            :enter-active-class="enterActiveClass"
            :leave-active-class="leaveActiveClass"
            :visible-arrow="true"
            :delay-on-mouse-over="200"
            :delay-on-mouse-out="200"
            :disabled="disabled"
            append-to-body
            ref="popper"
            :options="options">
            <span class="popper" :class="[e('popper')]">
                <span :class="[e('inner')]"><slot name="content">{{content}}</slot></span>
            </span>

        <span slot="reference"><slot></slot></span>
    </popper>
</template>

<script lang="ts">
import {Component, Emit, Inject, Model, Prop} from 'vue-property-decorator'
import {mixins} from 'vue-class-component'
import BemMixin from '../../../core/mixins/BemMixin'
import {IconFont} from '../../iconfont'
import Popperable from '../../../core/mixins/Popperable'

@Component({
  components: {IconFont},
  })
export default class Tooltip extends mixins(BemMixin, Popperable) {
    @Prop(String) content: string
}
</script>
