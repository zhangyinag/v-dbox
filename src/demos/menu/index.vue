<template>
<div>
   <h3>导航菜单 Menu</h3>
   <br>
   <p>水平模式</p>
   <v-menu>
      <v-menu-item index="1">处理中心</v-menu-item>
      <v-menu-item index="2">我的工作台</v-menu-item>
      <v-menu-item index="3">订单处理</v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>水平模式 禁用项</p>
   <v-menu>
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-menu-item index="2" disabled><v-icon type="setting"></v-icon>我的工作台</v-menu-item>
      <v-menu-item index="3"><a><v-icon type="appstore"></v-icon>订单处理</a></v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>水平模式 子菜单</p>
   <v-menu>
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-sub-menu index="2" trigger="click">
         <template slot="title">我的工作台</template>
         <v-menu-item index="2-1"><v-icon type="setting"></v-icon>选项1</v-menu-item>
         <v-sub-menu index="2-2">
            <template slot="title"><v-icon type="setting"></v-icon>选项2</template>
            <v-menu-item index="2-2-1">第三级选项1</v-menu-item>
            <v-menu-item index="2-2-2">第三级选项2</v-menu-item>
            <v-menu-item index="2-2-3">第三级选项3</v-menu-item>
         </v-sub-menu>
         <v-menu-item index="2-3"><v-icon type="setting"></v-icon>选项3</v-menu-item>
      </v-sub-menu>
      <v-menu-item index="3"><a><v-icon type="appstore"></v-icon>订单处理</a></v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>水平模式 分组</p>
   <v-menu>
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-sub-menu index="2" trigger="click">
         <template slot="title">我的工作台</template>
         <v-menu-item index="2-1"><v-icon type="setting"></v-icon>选项1</v-menu-item>
         <v-sub-menu index="2-2" trigger="click">
            <template slot="title"><v-icon type="setting"></v-icon>选项2</template>
            <v-menu-item-group>
               <template slot="title">分组1</template>
               <v-menu-item index="2-2-1">第三级选项1</v-menu-item>
               <v-menu-item index="2-2-2">第三级选项2</v-menu-item>
               <v-menu-item index="2-2-3">第三级选项3</v-menu-item>
            </v-menu-item-group>

            <v-menu-item-group>
               <template slot="title">分组2</template>
               <v-menu-item index="2-2-4">第三级选项4</v-menu-item>
               <v-menu-item index="2-2-5">第三级选项5</v-menu-item>
               <v-menu-item index="2-2-6">第三级选项6</v-menu-item>
            </v-menu-item-group>
         </v-sub-menu>
         <v-menu-item index="2-3"><v-icon type="setting"></v-icon>选项3</v-menu-item>
      </v-sub-menu>
      <v-menu-item index="3"><a><v-icon type="appstore"></v-icon>订单处理</a></v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>垂直模式 基本</p>
   <v-menu mode="vertical" style="width: 256px;">
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-menu-item index="2"> <v-icon type="mail"></v-icon>我的工作台</v-menu-item>
      <v-menu-item index="3"><v-icon type="appstore"></v-icon>订单处理</v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>垂直模式 子菜单</p>
   <v-menu mode="vertical" style="width: 256px;">
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-sub-menu index="2-2" trigger="click">
         <template slot="title"><v-icon type="setting"></v-icon>选项2</template>
         <v-menu-item-group>
            <template slot="title">分组1</template>
            <v-menu-item index="2-2-1">第三级选项1</v-menu-item>
            <v-sub-menu index="2-2-2" trigger="click">
               <template slot="title"><v-icon type="setting"></v-icon>Sub Menu</template>
               <v-menu-item index="2-2-2-1">选项7</v-menu-item>
               <v-menu-item index="2-2-2-2">选项8</v-menu-item>
            </v-sub-menu>
         </v-menu-item-group>

         <v-menu-item-group>
            <template slot="title">分组2</template>
            <v-menu-item index="2-2-4">第三级选项4</v-menu-item>
            <v-menu-item index="2-2-5">第三级选项5</v-menu-item>
         </v-menu-item-group>
      </v-sub-menu>
      <v-menu-item index="3"><v-icon type="appstore"></v-icon>订单处理</v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>行内模式 子菜单</p>
   <v-menu mode="inline" style="width: 256px;">
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-sub-menu index="2-2" trigger="click">
         <template slot="title"><v-icon type="setting"></v-icon>选项2</template>
         <v-menu-item-group>
            <template slot="title">分组1</template>
            <v-menu-item index="2-2-1">第三级选项1</v-menu-item>
            <v-sub-menu index="2-2-2" trigger="click">
               <template slot="title"><v-icon type="setting"></v-icon>Sub Menu</template>
               <v-menu-item index="2-2-2-1">选项7</v-menu-item>
               <v-menu-item index="2-2-2-2">选项8</v-menu-item>
            </v-sub-menu>
         </v-menu-item-group>

         <v-menu-item-group>
            <template slot="title">分组2</template>
            <v-menu-item index="2-2-4">第三级选项4</v-menu-item>
            <v-menu-item index="2-2-5">第三级选项5</v-menu-item>
         </v-menu-item-group>
         <v-menu-item index="2-2-6">选项6</v-menu-item>
         <v-menu-item index="2-2-7">选项7</v-menu-item>
      </v-sub-menu>
      <v-menu-item index="3"><v-icon type="appstore"></v-icon>订单处理</v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>行内模式 缩起/展开</p>
   <small>在menu-item或submenu的title中请使用span(而不是直接填充文字)</small>
   <div>
      <input type="checkbox" v-model="inlineCollapsed"> 切换 <br><br>
   </div>
   <v-menu mode="inline" :inline-collapsed="inlineCollapsed" style="width: 256px;">
      <v-menu-item index="1"> <v-icon type="mail"></v-icon><span>处理中心</span></v-menu-item>
      <v-sub-menu index="2-2" trigger="click">
         <template slot="title"><v-icon type="setting"></v-icon><span>选项2</span></template>
         <v-menu-item-group>
            <template slot="title">分组1</template>
            <v-menu-item index="2-2-1">第三级选项1</v-menu-item>
            <v-sub-menu index="2-2-2" trigger="click">
               <template slot="title"><v-icon type="setting"></v-icon>Sub Menu</template>
               <v-menu-item index="2-2-2-1">选项7</v-menu-item>
               <v-menu-item index="2-2-2-2">选项8</v-menu-item>
            </v-sub-menu>
         </v-menu-item-group>

         <v-menu-item-group>
            <template slot="title">分组2</template>
            <v-menu-item index="2-2-4">第三级选项4</v-menu-item>
            <v-menu-item index="2-2-5">第三级选项5</v-menu-item>
         </v-menu-item-group>
         <v-menu-item index="2-2-6">选项6</v-menu-item>
         <v-menu-item index="2-2-7">选项7</v-menu-item>
      </v-sub-menu>
      <v-menu-item index="3"><v-icon type="appstore"></v-icon><span>订单处理</span></v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>暗色主题</p>
   <small style="color: red;">(待完成)</small>
   <div>
      <!--<input type="checkbox" v-model="inlineCollapsed"> 切换 <br><br>-->
   </div>
   <v-menu mode="inline" theme="dark" style="width: 256px;">
      <v-menu-item index="1"> <v-icon type="mail"></v-icon><span>处理中心</span></v-menu-item>
      <v-sub-menu index="2-2" trigger="click">
         <template slot="title"><v-icon type="setting"></v-icon><span>选项2</span></template>
         <v-menu-item-group>
            <template slot="title">分组1</template>
            <v-menu-item index="2-2-1">第三级选项1</v-menu-item>
            <v-sub-menu index="2-2-2" trigger="click">
               <template slot="title"><v-icon type="setting"></v-icon>Sub Menu</template>
               <v-menu-item index="2-2-2-1">选项7</v-menu-item>
               <v-menu-item index="2-2-2-2">选项8</v-menu-item>
            </v-sub-menu>
         </v-menu-item-group>

         <v-menu-item-group>
            <template slot="title">分组2</template>
            <v-menu-item index="2-2-4">第三级选项4</v-menu-item>
            <v-menu-item index="2-2-5">第三级选项5</v-menu-item>
         </v-menu-item-group>
         <v-menu-item index="2-2-6">选项6</v-menu-item>
         <v-menu-item index="2-2-7">选项7</v-menu-item>
      </v-sub-menu>
      <v-menu-item index="3"><v-icon type="appstore"></v-icon><span>订单处理</span></v-menu-item>
   </v-menu>

   <div style="margin-bottom: 240px;"></div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class MenuDemo extends Vue {
  inlineCollapsed: boolean = false
}
</script>

<style lang="scss" scoped>

</style>
