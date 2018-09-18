<template>
<div>
   <h3>日历 calendar</h3>
   <br>
   <br>
   <p :class="[$style.red]">基本</p>
   <label><input type="radio" value="month" v-model="mode1">&nbsp;month</label>&nbsp;
   <label><input type="radio" value="year" v-model="mode1">&nbsp;year</label> <br>
   <v-calendar v-model="value1" :mode="mode1"></v-calendar>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class CalendarDemo extends Vue {
  value1: Date = new Date()

  mode1: string = 'month'
}
</script>

<style lang="scss" module>
   .red{
      color: red;
   }
</style>
