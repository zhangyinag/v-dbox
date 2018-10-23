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
      <v-table-column label="操作" fixed="right" width="120px">
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

      <v-table-column label="操作" fixed="right" width="120px">
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

   <br>
   <br>
   <p>多选</p>
   <code style="color: red;">
      如果设置了 dataIndex, 确保其唯一性， 如果没有设置， 将使用对象本身作为 key
   </code> <br>
   <v-table :data="data7" height="400px" pagination>
      <v-table-column type="selection" :selections="selections">

      </v-table-column>
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
   <p>多选 (远程分页)</p>
   <code style="color: red;">
     指定 dataIndex 可以实现远程跨页多选
   </code> <br>
   <label><input type="checkbox" v-model="enableDataIndex"> 指定 dataIndex</label>
   <v-table :remote-result="remoteResult" :data-index="enableDataIndex && 'name'" @remote-change="onRemoteChange" :loading="loading6" height="400px" pagination>
      <v-table-column type="selection" :selections="selections" width="120px">

      </v-table-column>
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
   <p>排序</p>
   <v-table :data="data8" height="400px" pagination>
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名">
      </v-table-column>
      <v-table-column prop="age" label="年龄" sortable></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作" fixed="right" width="120px">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>排序 (远程)</p>
   <v-table :remote-result="remoteResult9" height="400px" :loading="loading9" @remote-change="onRemoteChange9" pagination>
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名">
      </v-table-column>
      <v-table-column prop="age" label="年龄" sortable></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作" fixed="right" width="120px">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>过滤</p>
   <v-table :data="data10"  pagination>
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名" :filters="nameFilters10">
      </v-table-column>
      <v-table-column prop="age" label="年龄" sortable :filters="ageFilters10"></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作" fixed="right" width="120px">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>过滤 (远程)</p>
   <v-table :remote-result="remoteResult11" :loading="loading11" @remote-change="onRemoteChange11"  pagination>
      <v-table-column prop="index" label="#">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名" :filters="nameFilters10">
      </v-table-column>
      <v-table-column prop="age" label="年龄" sortable :filters="ageFilters10"></v-table-column>
      <v-table-column prop="address" label="地址"></v-table-column>
      <v-table-column label="操作" fixed="right" width="120px">
         <template slot-scope="{row, $index}">
            <a>添加</a> | <a>删除</a>
         </template>
      </v-table-column>
   </v-table>

   <br>
   <br>
   <p>合并行列</p>
   <v-table :data="data12" pagination :span-fn="spanFn12">
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
   <p>展开行</p>
   <v-table :data="data13" pagination>
      <v-table-column type="expand" width="60px">
         <template slot-scope="{row, $index}">
            <v-table :data="row && row.items">
               <v-table-column prop="name" label="名称"></v-table-column>
               <v-table-column prop="num" label="数量"></v-table-column>
               <v-table-column prop="price" label="价格"></v-table-column>
            </v-table>
         </template>
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
   <p>单行模式</p>
   <code style="color: red;">bordered功能需要重写，表格使用自动布局，th, td中都需要一个相重合的div来实现宽度控制</code><br>
   <v-table :data="data14" pagination bordered>
      <v-table-column prop="index" label="#" width="80px">
         <template slot-scope="{row, $index}">{{$index + 1}}</template>
      </v-table-column>
      <v-table-column prop="name" label="姓名" min-width="80px">
      </v-table-column>
      <v-table-column prop="age" label="年龄" width="120px"></v-table-column>
      <v-table-column prop="address" label="地址" width="80px" single-line></v-table-column>
      <v-table-column prop="detail" label="详情" width="100px"></v-table-column>
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
import {RemoteParam, RemoteResult, TableColumnFilter, TableColumnSelection} from '../../components/table/src/type'
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

  data7 = [...this.data1]

  data8 = [...this.data1]

  remoteResult9: RemoteResult = {
    data: [],
    total: 0,
    currentPage: 1,
    pageSize: 10
  }

  remoteResult11: RemoteResult = {
    data: [],
    total: 0,
    currentPage: 1,
    pageSize: 10,
    filters: []
  }

  loading9: boolean = false

  loading11: boolean = false

  data10 = [...this.data1]

  data12 = [...this.data1]

  data13 = [...this.data1].map(v => {
    let items = [
      {
        name: '鸡蛋',
        num: '45',
        price: '23'
      },
      {
        name: '酸奶',
        num: '23',
        price: '12'
      },
      {
        name: '薯片',
        num: '45',
        price: '14'
      }
    ]
    return Object.assign({}, {items}, v)
  })

  data14 = [...this.data1].map(v => {
    return Object.assign({}, {detail: v.name + ',' + v.address}, v)
  })

  spanFn12 = (row: any, prop: string, rowIndex: number, colIndex: number) => {
    if (rowIndex === 1 && colIndex === 1) {
      return {
        rowspan: 2,
        colspan: 2
      }
    }
    if (rowIndex === 1 && colIndex === 2) {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
    if (rowIndex === 2 && colIndex === 1) {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
    if (rowIndex === 2 && colIndex === 2) {
      return {
        rowspan: 0,
        colspan: 0
      }
    }
  }

  ageFilters10: TableColumnFilter[] = [
    {
      text: '23',
      value: 23
    },
    {
      text: '24',
      value: 24
    },
    {
      text: '35',
      value: 35
    }
  ]

  selections: TableColumnSelection[] = [
    {
      label: '全部',
      key: 'all',
      onSelect: (selectedKeySet) => {
        this.data7.forEach(v => selectedKeySet.add(v))
      }
    },
    {
      label: '奇数行',
      key: 'odd',
      onSelect: (selectedKeySet) => {
        this.data7.forEach((v, i) => {
          if (i % 2 === 0) selectedKeySet.add(v)
          else selectedKeySet.delete(v)
        })
      }
    }
  ]

  enableDataIndex: boolean = false

  get nameFilters10 (): TableColumnFilter[] {
    let set = new Set<any>()
    this.data10.forEach(v => {
      set.add(v.name)
    })
    return [...set].map(v => {
      return {
        value: v,
        text: v
      }
    })
  }

  onRemoteChange (param: RemoteParam) {
    this.loading6 = true
    setTimeout(() => {
      const all = [...JSON.parse(JSON.stringify(this.data1))]
      let maxPage = Math.ceil(all.length / param.pageSize)
      let currentPage = maxPage < param.currentPage ? maxPage : param.currentPage
      let start = (currentPage - 1) * param.pageSize
      let end = start + param.pageSize
      Object.assign(this.remoteResult, {
        data: all.slice(start, end),
        total: all.length,
        currentPage: currentPage,
        pageSize: param.pageSize,
        sort: null
      })
      this.loading6 = false
    }, 2000)
  }

  onRemoteChange9 (param: RemoteParam) {
    this.loading9 = true
    setTimeout(() => {
      const all = [...JSON.parse(JSON.stringify(this.data1))]
      let maxPage = Math.ceil(all.length / param.pageSize)
      let currentPage = maxPage < param.currentPage ? maxPage : param.currentPage
      let start = (currentPage - 1) * param.pageSize
      let end = start + param.pageSize
      if (param.sorter) {
        all.sort((a, b) => {
          return (a[param.sorter.prop] - b[param.sorter.prop]) * (param.sorter.order === 'desc' ? -1 : 1)
        })
      }
      Object.assign(this.remoteResult9, {
        data: all.slice(start, end),
        total: all.length,
        currentPage: currentPage,
        pageSize: param.pageSize,
        sorter: param.sorter
      })
      this.loading9 = false
    }, 2000)
  }

  onRemoteChange11 (param: RemoteParam) {
    this.loading11 = true
    setTimeout(() => {
      let all = [...JSON.parse(JSON.stringify(this.data1))]
      if (param.sorter) {
        all.sort((a, b) => {
          return (a[param.sorter.prop] - b[param.sorter.prop]) * (param.sorter.order === 'desc' ? -1 : 1)
        })
      }
      if (param.filters && param.filters.length > 0) {
        all = all.filter(v => {
          return param.filters.every(filter => {
            if (!filter.values || filter.values.length < 1) return true
            return filter.values.includes(v[filter.prop])
          })
        })
      }
      let maxPage = Math.ceil(all.length / param.pageSize)
      let currentPage = maxPage < param.currentPage ? maxPage : param.currentPage
      let start = (currentPage - 1) * param.pageSize
      let end = start + param.pageSize
      Object.assign(this.remoteResult11, {
        data: all.slice(start, end),
        total: all.length,
        currentPage: currentPage,
        pageSize: param.pageSize,
        sorter: param.sorter,
        filters: param.filters
      })
      this.loading11 = false
    }, 2000)
  }

  created () {
    this.onRemoteChange({currentPage: 1, pageSize: 10})
    this.onRemoteChange9({currentPage: 1, pageSize: 10})
    this.onRemoteChange11({currentPage: 1, pageSize: 10})
  }
}
</script>

<style lang="scss" scoped>

</style>
