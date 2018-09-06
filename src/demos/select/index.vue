<template>
<div>
   <h3>下拉框 select</h3>
   <br>
   <br>
   <p>基本</p>
   <v-select class="select" v-model="value1">
      <v-option label="1">Jack</v-option>
      <v-option label="2">Lee</v-option>
      <v-option label="3">Lucy Liu</v-option>
   </v-select>

   <br>
   <br>
   <p>尺寸</p>
   <v-select class="select" v-model="value2" size="sm">
      <v-option label="1">Jack</v-option>
      <v-option label="2">Lee</v-option>
      <v-option label="3">Lucy Liu</v-option>
   </v-select>
   &nbsp;
   <v-select class="select" v-model="value3">
      <v-option label="1">Jack</v-option>
      <v-option label="2">Lee</v-option>
      <v-option label="3">Lucy Liu</v-option>
   </v-select>
   &nbsp;
   <v-select class="select" v-model="value4" size="lg">
      <v-option label="1">Jack</v-option>
      <v-option label="2">Lee</v-option>
      <v-option label="3">Lucy Liu</v-option>
   </v-select>

   <br>
   <br>
   <p>禁用</p>
   <v-select class="select" v-model="value5" disabled>
      <v-option label="1">Jack</v-option>
      <v-option label="2">Lee</v-option>
      <v-option label="3">Lucy Liu</v-option>
   </v-select>
   &nbsp;
   <v-select class="select" v-model="value6">
      <v-option label="1">Jack</v-option>
      <v-option label="2">Lee</v-option>
      <v-option label="3" disabled>Lucy Liu</v-option>
   </v-select>

   <br>
   <br>
   <p>分组</p>
   <v-select class="select" v-model="value7">
      <v-option-group label="分组一">
         <v-option label="1">Jack</v-option>
         <v-option label="2">Lee</v-option>
         <v-option label="3">Lucy Liu</v-option>
      </v-option-group>
      <v-option-group label="分组2">
         <v-option label="4">上海</v-option>
         <v-option label="5">北京</v-option>
         <v-option label="6">深圳</v-option>
      </v-option-group>
   </v-select>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class SelectDemo extends Vue {
  value1: string = '2'
  value2: string = '2'
  value3: string = '2'
  value4: string = '2'
  value5: string = '2'
  value6: string = '2'
  value7: string = '2'
  value8: string = '2'
}
</script>

<style lang="scss" scoped>
.select{
   width: 240px;
}
</style>
