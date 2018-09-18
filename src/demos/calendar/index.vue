<template>
<div>
   <h3>日历 calendar</h3>
   <br>
   <br>
   <p :class="[$style.red]">基本</p>
   <v-calendar></v-calendar>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class CalendarDemo extends Vue {
}
</script>

<style lang="scss" module>
   .red{
      color: red;
   }
</style>
