<template>
<div>
   <h3>导航菜单 Menu</h3>
   <br>
   <p>基本</p>
   <v-menu>
      <v-menu-item index="1">处理中心</v-menu-item>
      <v-menu-item index="2">我的工作台</v-menu-item>
      <v-menu-item index="3">订单处理</v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>禁用项</p>
   <v-menu>
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-menu-item index="2" disabled><v-icon type="setting"></v-icon>我的工作台</v-menu-item>
      <v-menu-item index="3"><a><v-icon type="appstore"></v-icon>订单处理</a></v-menu-item>
   </v-menu>

   <br>
   <br>

   <p>子菜单</p>
   <v-menu>
      <v-menu-item index="1"> <v-icon type="mail"></v-icon>处理中心</v-menu-item>
      <v-menu-item index="2"><v-icon type="setting"></v-icon>我的工作台</v-menu-item>
      <v-menu-item index="3"><a><v-icon type="appstore"></v-icon>订单处理</a></v-menu-item>
   </v-menu>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class MenuDemo extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
