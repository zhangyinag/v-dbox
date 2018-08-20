<template>
<div>
   <h3>栅格</h3>
   <br>
   <p>基本栅格</p>&nbsp;

   <v-row>
      <v-col :span="1"><div class="col">col-1</div></v-col>
      <v-col :span="2"><div class="col deep">col-2</div></v-col>
      <v-col :span="3"><div class="col">col-3</div></v-col>
      <v-col :span="4"><div class="col deep">col-4</div></v-col>
      <v-col :span="5"><div class="col">col-5</div></v-col>
      <v-col :span="9"><div class="col deep">col-9</div></v-col>
   </v-row>

   <br>
   <br>

   <p>区域间隔</p>&nbsp;

   <v-row :gutter="8">
      <v-col :span="6"><div class="col">col-6</div></v-col>
      <v-col :span="6"><div class="col deep">col-6</div></v-col>
      <v-col :span="6"><div class="col">col-6</div></v-col>
      <v-col :span="6"><div class="col deep">col-6</div></v-col>
   </v-row>

   <br>
   <br>

   <p>嵌套</p>&nbsp;
   <v-row :gutter="8">
      <v-col :span="18">
         <v-row>
            <v-col :span="8"><div class="col">col-8</div></v-col>
            <v-col :span="8"><div class="col deep">col-8</div></v-col>
            <v-col :span="8"><div class="col">col-8</div></v-col>
         </v-row>
      </v-col>
      <v-col :span="6"><div class="col deep">col-6</div></v-col>
   </v-row>

   <br>
   <br>

   <p>偏移</p>&nbsp;
   <v-row :gutter="8">
      <v-col :span="8"><div class="col">col-8</div></v-col>
      <v-col :span="8" :offset="8"><div class="col deep">col-8</div></v-col>
   </v-row>

   <br>

   <v-row :gutter="8">
      <v-col :span="6" :offset="6"><div class="col">col-6 offset-6</div></v-col>
      <v-col :span="6" :offset="6"><div class="col deep">col-6 offset-6</div></v-col>
   </v-row>

   <br>

   <v-row :gutter="8">
      <v-col :span="12" :offset="6"><div class="col">col-12 offset-6</div></v-col>
      <v-col :span="3" :offset="3"><div class="col">col-3 offset-3</div></v-col>
   </v-row>

   <br>
   <br>

   <p>排序</p>

   <v-row :gutter="8">
      <v-col :span="6" :push="18"><div class="col">col-6 push-18</div></v-col>
      <v-col :span="18" :pull="6"><div class="col">col-18 pull-6</div></v-col>
   </v-row>
   <br>
   <small>也可以使用 <code>order</code>, 但不要同时使用</small>
   <v-row :gutter="8">
      <v-col :span="6" :order="1"><div class="col">col-6 order-1</div></v-col>
      <v-col :span="18" :order="0"><div class="col">col-18 order-0</div></v-col>
   </v-row>

   <br>
   <br>

   <p>对齐</p>
   <small>水平 (start)</small>
   <v-row :gutter="4" justify="start">
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
   </v-row>
   <br>

   <small>水平 (end)</small>
   <v-row :gutter="4" justify="end">
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
   </v-row>
   <br>

   <small>水平 (center)</small>
   <v-row :gutter="4" justify="center">
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
   </v-row>
   <br>

   <small>水平 (space-between)</small>
   <v-row :gutter="4" justify="space-between">
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
   </v-row>
   <br>

   <small>水平 (space-around)</small>
   <v-row :gutter="4" justify="space-around">
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
      <v-col :span="4"><div class="col">col-4</div></v-col>
   </v-row>

   <small>垂直 (top)</small>
   <v-row :gutter="4" align="top">
      <v-col :span="4"><div class="col hg-sm">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-md">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-lg">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-xl">col-4</div></v-col>
   </v-row>
   <br>

   <small>垂直 (middle)</small>
   <v-row :gutter="4" align="middle">
      <v-col :span="4"><div class="col hg-sm">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-md">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-lg">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-xl">col-4</div></v-col>
   </v-row>
   <br>

   <small>垂直 (bottom)</small>
   <v-row :gutter="4" align="bottom">
      <v-col :span="4"><div class="col hg-sm">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-md">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-lg">col-4</div></v-col>
      <v-col :span="4"><div class="col hg-xl">col-4</div></v-col>
   </v-row>

   <br>
   <br>

   <p>响应式</p>
   <small>xs-24, sm-12, md-8, lg-6, xl-4, xxl-3</small>
   <v-row :gutter="4">
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
      <v-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" :xxl="3"><div class="col"></div></v-col>
   </v-row>

   <br>
   <br>

   <p>配置器</p>
   <label>Gutter</label><br>
   <input v-model.number="gutter" type="range" min="0" step="4" max="64">&nbsp; {{gutter}}<br>
   <br>
   <label>Columns</label><br>
   <input v-model.number="column" type="range" min="2" step="2" max="8">&nbsp; {{column}}<br>
   <br>
   <v-row :gutter="gutter">
      <v-col :span="24/column" v-for="i in column" :key="i"><div class="col"></div></v-col>
   </v-row>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class GridDemo extends Vue {
  gutter: number = 8

  column: number = 4
}
</script>

<style lang="scss" scoped>
   .col{
      height: 56px;
      line-height: 56px;
      text-align: center;
      background: #1890ff;
      color: #fff;
      margin-bottom: 8px;
   }
   .deep{
      background: #096dd9;
   }

   .hg-sm {
      height: 40px;
   }

   .hg-md {
      height: 80px;
   }

   .hg-lg {
      height: 120px;
   }

   .hg-xl {
      height: 160px;
   }
</style>
