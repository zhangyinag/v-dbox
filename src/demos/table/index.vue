<template>
<div>
   <h3>表格 Table</h3>
   <br>
   <br>
   <v-table :data="data1">
      <v-table-column prop="name" label="姓名">
         <span>hello-world</span>
      </v-table-column>
      <v-table-column prop="age" label="年龄"></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
   </v-table>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class TableDemo extends Vue {
  data1 = [
    {
      name: 'Alison',
      age: 23,
      address: 'Shanghai China'
    },
    {
      name: 'Lilith',
      age: 25,
      address: 'NewYork USA'
    },
    {
      name: 'Joe',
      age: 12,
      address: 'London UK'
    }
  ]
}
</script>

<style lang="scss" scoped>

</style>
