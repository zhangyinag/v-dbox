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
  disabled1: boolean = true
}
</script>

<style lang="scss" scoped>

</style>
