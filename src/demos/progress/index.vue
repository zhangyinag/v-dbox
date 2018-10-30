<template>
<div>
   <component-view :title="title" :examples="examples"></component-view>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {RemoteParam, RemoteResult, TableColumnFilter, TableColumnSelection} from '../../components/table/src/type'
@Component({
  components: {},
  })
export default class ProgressDemo extends Vue {
   title: string = 'Progress 进度条'

  examples: any[] = [
    {
      file: 'progress/examples/Basic.vue'
    },
    {
      file: 'progress/examples/Circle.vue'
    },
  ]
}
</script>

<style lang="scss" scoped>

</style>
