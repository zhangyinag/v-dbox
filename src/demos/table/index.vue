<template>
<div>
   <h3>表格 Table</h3>
   <br>
   <br>
   <p>基本</p>
   <v-table :data="data1">
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名">
      </v-table-column>
      <v-table-column prop="age" label="年龄"></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>固定表头</p>
   <v-table :data="data2" height="200px">
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名">
      </v-table-column>
      <v-table-column prop="age" label="年龄"></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <div style="height: 240px;"></div>
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
    },
    {
      name: 'Haley',
      age: 24,
      address: 'LA USA'
    },
    {
      name: 'Phil',
      age: 45,
      address: 'Alaska USA'
    },
    {
      name: 'Juli',
      age: 34,
      address: 'Atlanta USA'
    },
    {
      name: 'Lily',
      age: 14,
      address: 'Boston USA'
    },
    {
      name: 'Alex',
      age: 18,
      address: 'Chicago USA'
    },
    {
      name: 'Jay',
      age: 76,
      address: 'Seattle USA'
    },
    {
      name: 'Cam',
      age: 47,
      address: 'San Francisco USA'
    },
    {
      name: 'Mitch',
      age: 34,
      address: 'New Orleans USA'
    },
    {
      name: 'Loe',
      age: 34,
      address: 'Detroit USA'
    },
    {
      name: 'Mary',
      age: 23,
      address: 'Denver USA'
    }

  ]

  data2 = [].concat(this.data1)
}
</script>

<style lang="scss" scoped>

</style>
