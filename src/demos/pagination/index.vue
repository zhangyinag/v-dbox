<template>
<div>
   <h3>分页 Pagination</h3>
   <br>
   <br>
   total: <input type="text" v-model.number.lazy="total1"> &nbsp;
   current: <input type="text" v-model.number.lazy="current1"> &nbsp;
   <br>
   <br>
   <v-pagination :total="total1" :current-page="current1"></v-pagination>
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
}
</script>

<style lang="scss" scoped>

</style>
