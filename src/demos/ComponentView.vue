<template>
<div>
   <h1>{{title}}</h1>
   <component-example v-for="example in examples" :key="example.file" :file="example.file"></component-example>
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
}
</script>

<style lang="scss" module>
</style>
