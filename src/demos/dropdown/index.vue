<template>
<div>
   <h3> 下拉菜单 (Dropdown)</h3>

   <p>基本</p>

   <v-dropdown>
      <a>下拉菜单</a>
      <v-dropdown-menu slot="dropdown">
         <v-dropdown-item>黄金糕</v-dropdown-item>
         <v-dropdown-item>狮子头</v-dropdown-item>
         <v-dropdown-item>螺蛳粉</v-dropdown-item>
         <v-dropdown-item>双皮奶</v-dropdown-item>
         <v-dropdown-item>蚵仔煎</v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

   <br>
   <br>

   <p>锚点</p>

   <v-dropdown>
      <a>导航</a>
      <v-dropdown-menu slot="dropdown">
         <v-dropdown-item><a href="http://baidu.com" target="_blank">百度一下</a></v-dropdown-item>
         <v-dropdown-item><a href="http://github.com" target="_blank">github</a></v-dropdown-item>
         <v-dropdown-item><a href="http://ant.design.com" target="_blank">ant design</a></v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

   <br>
   <br>

   <p>禁用项/分割项</p>

   <v-dropdown>
      <a>导航</a>
      <v-dropdown-menu slot="dropdown">
         <v-dropdown-item>黄金糕</v-dropdown-item>
         <v-dropdown-item disabled>狮子头</v-dropdown-item>
         <v-dropdown-item>螺蛳粉</v-dropdown-item>
         <v-dropdown-item divider></v-dropdown-item>
         <v-dropdown-item>双皮奶</v-dropdown-item>
         <v-dropdown-item>蚵仔煎</v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Dropdown from '../../components/dropdown/src/Dropdown'
@Component({
  components: {Dropdown},
  })
export default class PopperDemo extends Vue {
  delayOnMouseOver: number = 10

  delayOnMouseOut: number = 10

  disabled: boolean = false
}
</script>

<style lang="scss">
</style>
