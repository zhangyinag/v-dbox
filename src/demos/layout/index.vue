<template>
<div>
   <h3>布局</h3>
   <br>
   <p>四种基本布局方案</p>
   <v-layout>
      <v-header class="header">Header</v-header>
      <v-content class="content">Content</v-content>
      <v-footer  class="footer">Footer</v-footer>
   </v-layout>

   <br>
   <br>

   <v-layout>
      <v-header class="header">Header</v-header>
      <v-layout>
         <v-sider class="sider">Sider</v-sider>
         <v-content class="content">Content</v-content>
      </v-layout>
      <v-footer class="footer">Footer</v-footer>
   </v-layout>

   <br>
   <br>

   <v-layout>
      <v-header class="header">Header</v-header>
      <v-layout>
         <v-content class="content">Content</v-content>
         <v-sider class="sider">Sider</v-sider>
      </v-layout>
      <v-footer class="footer">Footer</v-footer>
   </v-layout>

   <br>
   <br>

   <v-layout>
      <v-sider class="sider">Sider</v-sider>
      <v-layout>
         <v-header class="header">Header</v-header>
         <v-content class="content">Content</v-content>
         <v-footer class="footer">Footer</v-footer>
      </v-layout>
   </v-layout>

   <br>
   <br>

   <p>sider 可折叠</p>
   <v-layout>
      <v-sider class="sider" width="320px" :collapsed="collapsed">Sider</v-sider>
      <v-layout>
         <v-header class="header" style="text-align: left; padding-left: 10px;">
            <v-button type="primary" :icon="collapsed ? 'menu-unfold' : 'menu-fold'"
                      @click="collapsed = !collapsed"></v-button>  Header
         </v-header>
         <v-content class="content">Content</v-content>
         <v-footer class="footer">Footer</v-footer>
      </v-layout>
   </v-layout>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class LayoutDemo extends Vue {
  collapsed: boolean = false
}
</script>

<style lang="scss" scoped>
   .header{
      background: #40a9ff;
      color: #fff;
      text-align: center;
   }
   .content{
      background: #096dd9;
      color: #fff;
      text-align: center;
      line-height: 80px;
   }
   .footer{
      background: #1890ff;
      color: #fff;
      text-align: center;
   }
   .sider{
      background: #69c0ff;
      color: #fff;
      text-align: center;
      width: 200px + 32px;
   }
</style>
