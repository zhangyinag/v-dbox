<template>
<div>
   <component-view :title="title" :examples="examples" :api="api">
      <anchored-heading :level="2">简介</anchored-heading>
      <div v-html="intro"></div>
   </component-view>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import intro from './intro.md'

const base = 'progress/examples'
const examples: any[] = []

function importComponentAll (r) {
  r.keys().forEach(key => {
    examples.push({
      file: base + key.substr(1),
      component: r(key).default
    })
  })
}

function importSourceAll (r) {
  r.keys().forEach(key => {
    let file = base + key.substr(1)
    let example = examples.find(v => v.file === file)
    if (example) {
      example.source = r(key)
    }
  })
}

importComponentAll(require.context(`./examples/`, true, /\.vue$/))
importSourceAll(require.context('!raw-loader!./examples/', true, /\.vue$/))

@Component({
  components: {},
  })
export default class ProgressDemo extends Vue {
   title: string = 'Progress 进度条'

   examples: any[] = examples

   intro: string = intro

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
