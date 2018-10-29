<template>
<div>
   <h3>进度条 Progress</h3>
   <br>
   <br>
   <p>标准</p>
   <div style="width: 480px">
      <v-progress :percent="percent1"></v-progress>
      <input type="number" step="1" v-model="percent1">
   </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {RemoteParam, RemoteResult, TableColumnFilter, TableColumnSelection} from '../../components/table/src/type'
@Component({
  components: {},
  })
export default class ProgressDemo extends Vue {
  percent1: number = 10
}
</script>

<style lang="scss" scoped>

</style>
