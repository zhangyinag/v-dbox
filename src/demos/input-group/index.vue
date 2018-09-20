<template>
<div>
   <h3>输入框组 input-group</h3>
   <small>表单控件组合</small>
   <br>
   <br>
   <p>基本</p>
   <v-input-group>
      <v-input placeholder="0571"></v-input>
      <v-input placeholder="29809887"></v-input>
      <v-input placeholder="???"></v-input>
   </v-input-group>

   <br>
   <br>

   <v-input-group>
      <v-input placeholder="0571"></v-input>
      <v-input placeholder="~" style="width: 32px;" separator></v-input>
      <v-input placeholder="80978678"></v-input>
   </v-input-group>

   <br>
   <br>
   <p>select/input</p>
   <v-input-group>
      <v-select style="width: 120px;" v-model="value1" placeholder="请选择">
         <v-option label="Modern family">Modern family</v-option>
         <v-option label="Veep">Veep</v-option>
      </v-select>
      <v-input placeholder="0571"></v-input>
      <v-input placeholder="29809887"></v-input>
   </v-input-group>

   <br>
   <br>

   <v-input-group>
      <v-input placeholder="0571"></v-input>
      <v-select style="width: 120px;" v-model="value2" placeholder="请选择">
         <v-option label="Modern family">Modern family</v-option>
         <v-option label="Veep">Veep</v-option>
      </v-select>
      <v-input placeholder="29809887"></v-input>
   </v-input-group>

   <br>
   <br>

   <v-input-group>
      <v-input placeholder="0571"></v-input>
      <v-input placeholder="29809887"></v-input>
      <v-select style="width: 120px;" v-model="value3" placeholder="请选择">
         <v-option label="Modern family">Modern family</v-option>
         <v-option label="Veep">Veep</v-option>
      </v-select>
   </v-input-group>

   <br>
   <br>
   <p>button/input</p>
   <v-input-group>
      <v-button type="primary">Search</v-button>
      <v-input placeholder="0571"></v-input>
      <v-input placeholder="29809887"></v-input>
   </v-input-group>

   <br>
   <br>

   <v-input-group>
      <v-input placeholder="0571"></v-input>
      <v-input placeholder="29809887"></v-input>
      <v-button type="primary">Search</v-button>
   </v-input-group>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class CalendarDemo extends Vue {
  disabledDate (date: Date) {
    // only this year, this month
    let now = new Date()
    return !(now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth())
  }

  value1: string = ''

  value2: string = ''

  value3: string = ''

  value4: string = ''
}
</script>

<style lang="scss" module>
   .primary{
      color: #1890ff;
   }

   .error {
      color: #f5222d;
   }

   .success {
      color: #52c41a;
   }
</style>
