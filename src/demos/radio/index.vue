<template>
<div>
   <h3>单选 radio</h3>
   <br>
   <br>
   <p>基本</p>
   <v-radio label="1" v-model="value1">radio</v-radio>

   <br>
   <br>
   <p>禁用</p>
   <input type="checkbox" v-model="disabled1"> 切换 <br>
   <v-radio label="1" v-model="value2" :disabled="disabled1">radio</v-radio> &nbsp;
   <v-radio label="1" value="1" :disabled="disabled1">radio</v-radio> &nbsp;

   <br>
   <br>
   <p>单选组</p>
   <v-radio-group v-model="value3">
      <v-radio label="1">一</v-radio>
      <v-radio label="2">二</v-radio>
      <v-radio label="3">三</v-radio>
   </v-radio-group>

   <br>
   <br>
   <p>单选组 (多行对齐)</p>
   <v-radio-group v-model="value4" style="width: 200px">
      <v-radio label="1">一</v-radio>
      <v-radio label="2">二</v-radio>
      <v-radio label="3">三</v-radio>
      <v-radio label="4">四</v-radio>
      <v-radio label="5">五</v-radio>
      <v-radio label="6">六</v-radio>
   </v-radio-group>

   <br>
   <br>
   <p>单选按钮组</p>
   <v-radio-group v-model="value5">
      <v-radio-button label="1">一</v-radio-button>
      <v-radio-button label="2">二</v-radio-button>
      <v-radio-button label="3" disabled>三</v-radio-button>
      <v-radio-button label="4">四</v-radio-button>
      <v-radio-button label="5">五</v-radio-button>
      <v-radio-button label="6">六</v-radio-button>
   </v-radio-group>

   <br>
   <br>
   <p>单选按钮组 (主类型)</p>
   <v-radio-group v-model="value6" type="primary">
      <v-radio-button label="1">一</v-radio-button>
      <v-radio-button label="2">二</v-radio-button>
      <v-radio-button label="3">三</v-radio-button>
      <v-radio-button label="4" disabled>四</v-radio-button>
      <v-radio-button label="5">五</v-radio-button>
      <v-radio-button label="6">六</v-radio-button>
   </v-radio-group>

   <br>
   <br>
   <p>单选按钮组 (尺寸)</p>
   <v-radio-group v-model="value7" size="sm">
      <v-radio-button label="1">一</v-radio-button>
      <v-radio-button label="2">二</v-radio-button>
      <v-radio-button label="3">三</v-radio-button>
      <v-radio-button label="4">四</v-radio-button>
      <v-radio-button label="5" disabled>五</v-radio-button>
      <v-radio-button label="6">六</v-radio-button>
   </v-radio-group>

   <br>
   <br>

   <v-radio-group v-model="value8" size="lg">
      <v-radio-button label="1">一</v-radio-button>
      <v-radio-button label="2" disabled>二</v-radio-button>
      <v-radio-button label="3">三</v-radio-button>
      <v-radio-button label="4">四</v-radio-button>
      <v-radio-button label="5">五</v-radio-button>
      <v-radio-button label="6">六</v-radio-button>
   </v-radio-group>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class RadioDemo extends Vue {
  value1: string = ''
  value2: string = ''
  value3: string = ''
  value4: string = ''
  value5: string = ''
  value6: string = ''
  value7: string = ''
  value8: string = ''
  disabled1: boolean = true
}
</script>

<style lang="scss" scoped>

</style>
