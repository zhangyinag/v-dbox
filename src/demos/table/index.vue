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

   <br>
   <br>
   <p>固定列</p>
   <code style="color: #1890ff;">采用 position: sticky 实现固定表头及列， 在最新的Chrome, Safari, Opera 均有效, Firefox 尚不支持
   (奇怪的是Firefox支持sticky)</code> <br>
   大小：<input type="text" v-model.lazy="data3Size"> <br>
   <v-table :data="data3" height="400px">
      <v-table-column prop="index" label="#" fixed="left" width="120px">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名" width="500px">
      </v-table-column>
      <v-table-column prop="age" label="年龄" width="500px"></v-table-column>
      <v-table-column prop="address" label="地址" width="500px"></v-table-column>
      <v-table-column label="操作" fixed="right" width="180px">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>边框</p>
   <code style="color: #1890ff;">只设置 th > div 的宽度, 不支持 layout: fixed</code> <br>
   <v-table :data="data4" height="400px" bordered>
      <v-table-column prop="index" label="#" fixed="left">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名" width="500px">
      </v-table-column>
      <v-table-column prop="age" label="年龄" width="500px"></v-table-column>
      <v-table-column prop="address" label="地址" width="500px"></v-table-column>
      <v-table-column label="操作" fixed="right" >
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>多级表头</p>
   <v-table :data="data4" height="400px" bordered>
      <v-table-column prop="index" label="#" fixed="left">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column-group label="配送信息">
         <v-table-column label="姓名" prop="name" width="500px"></v-table-column>
         <v-table-column-group label="地址">
            <v-table-column label="国家" prop="country" width="500px"></v-table-column>
            <v-table-column label="城市" prop="city" width="500px"></v-table-column>
         </v-table-column-group>
      </v-table-column-group>

      <v-table-column label="操作" fixed="right" >
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>分页</p>
   <v-table :data="data5" height="400px" pagination>
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名">
      </v-table-column>
      <v-table-column prop="age" label="年龄"></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作" fixed="right" width="120px">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>


   <br>
   <br>
   <p>远程分页</p>
   <v-table :remote-result="remoteResult" @remote-change="onRemoteChange" height="400px" pagination :loading="loading6">
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名">
      </v-table-column>
      <v-table-column prop="age" label="年龄"></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作" fixed="right" width="120px">
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
import {RemoteParam, RemoteResult} from '../../components/table/src/type'
@Component({
  components: {},
  })
export default class TableDemo extends Vue {
  data1 = [
    {
      name: 'Alison',
      age: 23,
      address: 'Shanghai China',
      country: 'China',
      city: 'Shanghai'
    },
    {
      name: 'Lilith',
      age: 25,
      address: 'NewYork USA',
      country: 'USA',
      city: 'NewYork'
    },
    {
      name: 'Joe',
      age: 12,
      address: 'London UK',
      country: 'UK',
      city: 'London'
    },
    {
      name: 'Haley',
      age: 24,
      address: 'LA USA',
      country: 'USA',
      city: 'LA'
    },
    {
      name: 'Phil',
      age: 45,
      address: 'Alaska USA',
      country: 'USA',
      city: 'Alaska'
    },
    {
      name: 'Juli',
      age: 34,
      address: 'Atlanta USA',
      country: 'USA',
      city: 'Atlanta'
    },
    {
      name: 'Lily',
      age: 14,
      address: 'Boston USA',
      country: 'USA',
      city: 'Boston'
    },
    {
      name: 'Alex',
      age: 18,
      address: 'Chicago USA',
      country: 'USA',
      city: 'Chicago'
    },
    {
      name: 'Jay',
      age: 76,
      address: 'Seattle USA',
      country: 'USA',
      city: 'Seattle'
    },
    {
      name: 'Cam',
      age: 47,
      address: 'San Francisco USA',
      country: 'USA',
      city: 'San Francisco'
    },
    {
      name: 'Mitch',
      age: 34,
      address: 'New Orleans USA',
      country: 'USA',
      city: 'New Orleans'
    },
    {
      name: 'Loe',
      age: 34,
      address: 'Detroit USA',
      country: 'USA',
      city: 'Detroit'
    },
    {
      name: 'Mary',
      age: 23,
      address: 'Denver USA',
      country: 'USA',
      city: 'Denver'
    }

  ]

  data2 = [...this.data1]

  data3Size: number = 3

  get data3 () {
    let ret = []
    for (let i = 0; i< this.data3Size; i++) {
      ret.push({
        name: i,
        age: 23,
        address: 'Shanghai'
      })
    }
    return ret
  }

  data4 = [...this.data1]

  data5 = [...this.data1]

  loading6: boolean = false

  remoteResult: RemoteResult = {
    data: [],
    total: 0,
    currentPage: 1,
    pageSize: 10
  }

  onRemoteChange (param: RemoteParam) {
    this.loading6 = true
    setTimeout(() => {
      const all = [...this.data1, ...this.data1, ...this.data1, ...this.data1, ...this.data1]
      let start = (param.currentPage - 1) * param.pageSize
      Object.assign(this.remoteResult, {
        data: all.slice(start, start + param.pageSize),
        total: all.length,
        currentPage: param.currentPage,
        pageSize: param.pageSize
      })
      this.loading6 = false
    }, 2000)
  }

  created () {
    this.onRemoteChange({currentPage: 1, pageSize: 10})
  }
}
</script>

<style lang="scss" scoped>

</style>
