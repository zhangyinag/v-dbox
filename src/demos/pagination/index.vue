<template>
<div>
   <h3>分页 Pagination</h3>
   <code style="color: red;"> current-page 与 page-size 都可以不需要 sync， 这里并没有实现， 必须提供sync</code>
   <br>
   <br>
   total: <input type="text" v-model.number.lazy="total1"> &nbsp;
   current: <input type="text" v-model.number.lazy="current1"> &nbsp;
   <br>
   <br>
   <v-pagination :total="total1" :current-page.sync="current1" :page-size.sync="pageSize1"></v-pagination>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class PaginationDemo extends Vue {
  total1: number = 100

  current1: number = 1

  pageSize1: number = 10
}
</script>

<style lang="scss" scoped>

</style>
