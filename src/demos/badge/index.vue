<template>
<div>
   <h3>徽章 Badge</h3>
   <br>
   <br>
   <p>用于展示数量</p>
   <v-badge value="23">
      <a :class="[$style.block]"></a>
   </v-badge>
   &nbsp;&nbsp;
   <v-badge :value="1000" :max="999">
      <a :class="[$style.block]"></a>
   </v-badge>

   <br>
   <br>
   <p>独立使用</p>
   <v-badge value="23">
   </v-badge>
   <v-badge :value="1000" :max="999">
   </v-badge>

   <div :class="[$style.item]">
      <span>评论</span><v-badge value="23"></v-badge>
   </div>

   <br>
   <br>
   <p>红点</p>
   <label><input type="checkbox" v-model="dot1">点</label> <br>
   <v-badge :dot="dot1">
      <a :class="[$style.block]"></a>
   </v-badge>

   <br>
   <br>
   <p>状态</p>

   <div><v-badge dot></v-badge> success</div>
   <div><v-badge dot></v-badge> error</div>
   <div><v-badge dot></v-badge> default</div>
   <div><v-badge dot></v-badge> processing</div>
   <div><v-badge dot></v-badge> warning</div>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {RemoteParam, RemoteResult, TableColumnFilter, TableColumnSelection} from '../../components/table/src/type'
@Component({
  components: {},
  })
export default class BadgeDemo extends Vue {
  dot1: boolean = true
}
</script>

<style lang="scss" module>
.block{
   height: 42px;
   width: 42px;
   display: inline-block;
   border-radius: 4px;
   background-color: #eee;
}
.item{
   margin: 10px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border: 1px solid #eee;
   border-radius: 4px;
   line-height: 32px;
   height: 32px;
   vertical-align: middle;
   width: 120px;
}
</style>
