<template>
<div>
   <component-view :title="title" :examples="examples" :api="api"></component-view>
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
      file: 'progress/examples/BasicExample.vue'
    },
    {
      file: 'progress/examples/CircleExample.vue'
    }
  ]

   api: any = {
     props: [
       {
         name: 'width',
         default: 120,
         type: 'number',
         desc: '进度条宽度， 只对 circle 有效'
       },
       {
         name: 'type',
         default: 'line',
         type: 'line | circle',
         desc: '进度条类型'
       }
     ],
     events: [
       {
         name: 'click',
         value: `{percent: number}`,
         desc: '点击事件'
       }
     ],
     slots: [
       {
         name: 'default',
         desc: '默认卡槽'
       }
     ],
     scopedSlots: [
       {
         name: 'default',
         value: `{percent: number}`,
         desc: '具名卡槽'
       }
     ],
     methods: [
       {
         name: 'setPercent',
         params: `{percent: number}`,
         returnVal: `number`,
         desc: '设置百分比'
       }
     ]
   }
}
</script>

<style lang="scss" scoped>

</style>
