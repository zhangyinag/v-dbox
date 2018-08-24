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
         <v-dropdown-item>黄金糕 (25元/斤)</v-dropdown-item>
         <v-dropdown-item disabled>狮子头 (50元/斤)</v-dropdown-item>
         <v-dropdown-item>螺蛳粉 (80元/斤)</v-dropdown-item>
         <v-dropdown-item divider></v-dropdown-item>
         <v-dropdown-item>双皮奶 (10元/斤)</v-dropdown-item>
         <v-dropdown-item>蚵仔煎 (15元/斤)</v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

   <br>
   <br>

   <p>按钮</p>

   <v-dropdown trigger="click">
      <v-button type="primary">下拉菜单 <v-icon type="down"></v-icon></v-button>
      <v-dropdown-menu slot="dropdown">
         <v-dropdown-item>黄金糕 (25元/斤)</v-dropdown-item>
         <v-dropdown-item disabled>狮子头 (25元/斤)</v-dropdown-item>
         <v-dropdown-item>螺蛳粉 (25元/斤)</v-dropdown-item>
         <v-dropdown-item divider></v-dropdown-item>
         <v-dropdown-item>双皮奶 (25元/斤)</v-dropdown-item>
         <v-dropdown-item>蚵仔煎 (25元/斤)</v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

   <br>
   <br>

   <p>禁用</p>

   <v-dropdown>
      <v-button type="primary" disabled>下拉菜单 <v-icon type="down"></v-icon></v-button>
      <v-dropdown-menu slot="dropdown">
         <v-dropdown-item>黄金糕 (25元/斤)</v-dropdown-item>
         <v-dropdown-item disabled>狮子头 (25元/斤)</v-dropdown-item>
         <v-dropdown-item>螺蛳粉 (25元/斤)</v-dropdown-item>
         <v-dropdown-item divider></v-dropdown-item>
         <v-dropdown-item>双皮奶 (25元/斤)</v-dropdown-item>
         <v-dropdown-item>蚵仔煎 (25元/斤)</v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

   <br>
   <br>

   <p>分割按钮下拉</p>

   <v-dropdown>
      <v-button-group>
         <v-button type="primary" x-not-popper-trigger>下拉菜单</v-button>
         <v-button type="primary" icon="ellipsis"></v-button>
      </v-button-group>
      <v-dropdown-menu slot="dropdown">
         <v-dropdown-item>黄金糕 (25元/斤)</v-dropdown-item>
         <v-dropdown-item disabled>狮子头 (25元/斤)</v-dropdown-item>
         <v-dropdown-item>螺蛳粉 (25元/斤)</v-dropdown-item>
         <v-dropdown-item divider></v-dropdown-item>
         <v-dropdown-item>双皮奶 (25元/斤)</v-dropdown-item>
         <v-dropdown-item>蚵仔煎 (25元/斤)</v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

   <br>
   <br>

   <p>级联</p>

   <v-dropdown trigger="click">
      <v-button-group>
         <v-button type="primary" x-not-popper-trigger>下拉菜单</v-button>
         <v-button type="primary" icon="ellipsis"></v-button>
      </v-button-group>
      <v-dropdown-menu slot="dropdown">
         <v-dropdown-item disabled>数学</v-dropdown-item>
         <v-dropdown-item>
            <v-dropdown placement="right">
               <!--<div>计算机设计语言</div>-->
               <a>计算机设计语言 &nbsp;</a>
               <!--<v-button type="text">计算机设计语言</v-button>-->
               <v-dropdown-menu slot="dropdown">
                  <v-dropdown-item disabled>Java Language</v-dropdown-item>
                  <v-dropdown-item>Python Language</v-dropdown-item>
                  <v-dropdown-item>Ruby Language</v-dropdown-item>
               </v-dropdown-menu>
            </v-dropdown>
         </v-dropdown-item>
         <v-dropdown-item>马克思主义精选</v-dropdown-item>
      </v-dropdown-menu>
   </v-dropdown>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class PopperDemo extends Vue {
  delayOnMouseOver: number = 10

  delayOnMouseOut: number = 10

  disabled: boolean = false
}
</script>

<style lang="scss">
</style>
