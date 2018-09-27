<template>
<div>
   <h3>时间选择器 time-picker</h3>
   <br>
   <br>
   <p>基本</p>
   <v-time-picker v-model="value1"></v-time-picker>

    <br>
    <br>
    <p>禁用</p>
    <label><input type="checkbox" v-model="disabled1"> toggle</label> <br>
    <v-time-picker v-model="value1" :disabled="disabled1"></v-time-picker>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class DatePickerDemo extends Vue {
  value1: Date = new Date(2018, 8, 20)
  value2: Date = new Date(2018, 8, 22)

  disabled1: boolean = true
}
</script>

<style lang="scss" scoped>

</style>
