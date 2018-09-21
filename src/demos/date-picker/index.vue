<template>
<div>
   <h3>日期选择器 date-picker</h3>
   <br>
   <br>
   <p>基本</p>
   <v-date-picker v-model="value1"></v-date-picker>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class DatePickerDemo extends Vue {
  value1: Date = new Date(2018, 8, 20)
}
</script>

<style lang="scss" scoped>

</style>
