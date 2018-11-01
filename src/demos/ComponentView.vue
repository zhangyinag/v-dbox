<template>
<div>
   <h1>{{title}}</h1>
   <component-example v-for="example in examples" :key="example.file" :file="example.file"></component-example>
   <api-table v-bind="api"></api-table>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

@Component({
  components: {},
  })
export default class ComponentView extends Vue {
  @Prop(String) title: string

  @Prop(Array) examples: any[]

  @Prop(Object) api: any
}
</script>

<style lang="scss" module>
</style>
