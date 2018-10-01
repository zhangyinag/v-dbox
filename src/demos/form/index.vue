<template>
<div>
   <h3>表单 Form</h3>
   <br>
   <br>
   <p>布局</p>
   <label>
      <input type="radio" v-model="layout1" value="horizontal"> 水平 &nbsp;
   </label>
   <label>
      <input type="radio" v-model="layout1" value="vertical">  垂直 &nbsp;
   </label>

   <label>
      <input type="radio" v-model="layout1" value="inline">  内联 &nbsp;
   </label>
   <br>
   <br>
   <v-form :layout="layout1">
      <v-form-item label="姓名" :rules="[{required: true}]">
         <v-input v-model="form1.name"></v-input>
      </v-form-item>

      <v-form-item label="性别">
         <v-radio-group v-model="form1.sex">
            <v-radio label="M">男</v-radio>
            <v-radio label="F">女</v-radio>
         </v-radio-group>
      </v-form-item>
   </v-form>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class FormDemo extends Vue {
  form1: any = {
    name: '',
    sex: ''
  }

  layout1: string = 'horizontal'
}
</script>

<style lang="scss" module>
</style>
