<template>
    <i :class="['anticon', `anticon-${type}`, {'anticon-spin': spin}]">
        <slot></slot>
    </i>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component({
  components: {},
  })
export default class IconFont extends Vue {
    @Prop({type: String, required: true}) type: string

    @Prop(Boolean) spin: boolean
}
</script>
