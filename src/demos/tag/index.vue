<template>
<div>
   <h3>标签 tag</h3>
   <br>
   <br>
   <p>基本</p>
   <v-tag>tag 1</v-tag>

   <br>
   <br>
   <p>链接</p>
   <v-tag><a href="http://baidu.com">百度一下</a></v-tag>

   <br>
   <br>
   <p>可关闭</p>
   <v-tag closable v-if="value1" @close="value1 = false">tag 2</v-tag>

   <br>
   <br>
   <p>动态添加</p>
   <small style="color: red;">注意： 这里的key需要注意， 不能使用 i</small>
   <br>
   <input type="checkbox" v-model="useIndexKey"> 使用 i 作为key， 试着删除标签查看效果， 会产生错位 <br>
   <v-tag closable v-for="(tag, i) in tags" :key="useIndexKey ? i : tag" v-if="tag" @close="tags.splice(i, 1)">{{tag}}</v-tag>

   <v-button v-if="!inputMode" @click="inputMode = true" size="sm">+ 添加标签</v-button>
   <v-input v-else @keyup.native.enter="addTag" v-model.trim="newTagName" style="width: 120px;" size="sm" autofocus></v-input>

   <br>
   <br>
   <p>预置颜色</p>
   <v-tag color="pink" closable>pink</v-tag>
   <v-tag color="magenta" closable>magenta</v-tag>
   <v-tag color="red" closable>red</v-tag>
   <v-tag color="volcano" closable>volcano</v-tag>
   <v-tag color="orange" closable>orange</v-tag>
   <v-tag color="yellow" closable>yellow</v-tag>
   <v-tag color="gold" closable>gold</v-tag>
   <v-tag color="cyan" closable>cyan</v-tag>
   <v-tag color="lime" closable>lime</v-tag>
   <v-tag color="green" closable>green</v-tag>
   <v-tag color="blue" closable>blue</v-tag>
   <v-tag color="geekblue" closable>geekblue</v-tag>
   <v-tag color="purple" closable>purple</v-tag>

   <br>
   <br>
   <p>自定义颜色</p>
   <v-tag color="#f50" closable>#f50</v-tag>
   <v-tag color="#2db7f5" closable>#2db7f5</v-tag>
   <v-tag color="#87d068" closable>#87d068</v-tag>
   <v-tag color="#108ee9" closable>#108ee9</v-tag>

   <br>
   <br>
   <p>checkbox效果 <small>目前只支持 boolean 的双向绑定， 以后可能会扩展</small></p>
   <v-tag checkable v-model="checked1">#f50</v-tag>
   <v-tag checkable v-model="checked2" color="#f50">#f50</v-tag>

   <br>
   <br>
   <p>圆角模式</p>
   <v-tag closable round>tag</v-tag>
   <v-tag color="pink" closable round>pink</v-tag>
   <v-tag color="#f50" closable round>#f50</v-tag>
   <v-tag color="#2db7f5" closable round>#2db7f5</v-tag>
   <v-tag color="#87d068" closable round>#87d068</v-tag>
   <v-tag color="#108ee9" closable round>#108ee9</v-tag>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class TagDemo extends Vue {
  value1: boolean = true
  value2: boolean = true
  value3: boolean = true
  value4: boolean = true
  checked1: boolean = false
  checked2: boolean = false
  tags: string[] = ['1111111111', '2222222222', '3333333333', '44444444444']
  inputMode: boolean = false
  newTagName: string = ''

  useIndexKey: boolean = false

  addTag () {
    if (!this.newTagName) return
    this.tags.push(this.newTagName)
    this.newTagName = ''
    this.inputMode = false
  }
}
</script>

<style lang="scss" scoped>
</style>
