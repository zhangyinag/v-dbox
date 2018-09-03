<template>
<div>
   <h3>加载 loading</h3>
   <br>
   <br>
   <p>基本</p>
   <input type="checkbox" v-model="visible1"> 显示/隐藏 <br>
   <div style="background: #cccccc">
      <v-loading v-model="visible1"></v-loading>
      <p>item 1</p>
      <p>item 2</p>
      <p>item 3</p>
      <p>item 4</p>
   </div>

   <br>
   <br>
   <p>自定义项</p>
   <input type="checkbox" v-model="visible2"> 显示/隐藏 <br>
   <input type="checkbox" v-model="fullscreen2"> 全屏 <br>
   <input type="input" v-model="spinner2"> 自定义图案 <br>
   <input type="input" v-model="text2"> 自定义文字 <br>
   <input type="input" v-model="backgroundColor2"> 自定义背景 <br>
   <div style="background: #cccccc">
      <v-loading v-model="visible2" :fullscreen="fullscreen2"
                 :spinner="spinner2" :text="text2" :background-color="backgroundColor2"></v-loading>
      <p>item 1</p>
      <p>item 2</p>
      <p>item 3</p>
      <p>item 4</p>
   </div>

   <br>
   <br>
   <p>指令模式</p>
   <input type="checkbox" v-model="visible3"> 显示/隐藏 <br>
   <div style="background: #cccccc" v-loading="visible3">
      <p>item 1</p>
      <p>item 2</p>
      <p>item 3</p>
      <p>item 4</p>
   </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class LoadingDemo extends Vue {
  visible1: boolean = false
  visible2: boolean = false
  fullscreen2: boolean = false
  spinner2: string = 'loading'
  text2: string = '加载中'
  backgroundColor2: string = '#000'
  visible3: boolean = false
}
</script>

<style lang="scss" scoped>

</style>
