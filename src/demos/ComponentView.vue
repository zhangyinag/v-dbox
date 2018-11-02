<template>
<div :class="[$style.box]">
   <div :class="[$style.content]">
      <anchored-heading :level="1">{{title}}</anchored-heading>

      <slot></slot>

      <anchored-heading :level="2">示例</anchored-heading>
      <component-example v-for="example in examples" v-bind="example"></component-example>
      <anchored-heading :level="2">API</anchored-heading>
      <api-table v-bind="api"></api-table>
   </div>
   <div :class="[$style.sticker]">
      <component-catalog :anchors="anchors"></component-catalog>
   </div>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Provide} from 'vue-property-decorator'
import AnchoredHeading from './AnchoredHeading.vue'

@Component({
  components: {},
  })
export default class ComponentView extends Vue {
  @Prop(String) title: string

  @Prop(Array) examples: any[]

  @Prop(Object) api: any

  anchors: AnchoredHeading[] = []

  @Provide() addAnchor (anchor: AnchoredHeading) {
    this.anchors.push(anchor)
  }
}
</script>

<style lang="scss" module>
   .box{
      display: flex;
      justify-content: space-between;
   }

   .sticker{
      width: 200px;
      padding-left: 20px;
   }

   .content{
      flex-grow: 1;
   }
</style>
