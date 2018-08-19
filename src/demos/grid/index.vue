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
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class ButtonDemo extends Vue {
}
</script>

<style lang="scss" scoped>
   .col{
      height: 56px;
      line-height: 56px;
      text-align: center;
      background: #1890ff;
      color: #fff;
   }
   .deep{
      background: #096dd9;
   }
</style>
