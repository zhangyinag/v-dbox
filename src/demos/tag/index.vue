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
   <v-tag closable v-for="(tag, i) in tags" :key="i" v-if="tag" @close="tags.splice(i, 1)">{{tag}}</v-tag>

   <v-button v-if="!inputMode" @click="inputMode = true" size="sm">+ 添加标签</v-button>
   <v-input v-else @keyup.native.enter="addTag" v-model.trim="newTagName" style="width: 120px;" size="sm" autofocus></v-input>

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
  tags: string[] = []
  inputMode: boolean = false
  newTagName: string = ''

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
