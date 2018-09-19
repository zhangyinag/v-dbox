<template>
<div>
   <h3>日历 calendar</h3>
   <br>
   <br>
   <p :class="[$style.red]">基本</p>
   <v-calendar></v-calendar>

   <br>
   <br>
   <p>自定义 cell 内容</p>
   <v-calendar>
      <span slot-scope="{date}" v-if="date.getDate()%7 === 1">
         <ul style="padding: 0 0 0 10px; margin: 0;">
            <li :class="[$style.primary]">do laundry</li>
            <li :class="[$style.success]">go shopping</li>
            <li :class="[$style.error]">watch GOT</li>
         </ul>
      </span>
   </v-calendar>

   <br>
   <br>
   <p>禁用日期</p>
   <v-calendar :disabled-date="disabledDate"></v-calendar>

   <br>
   <br>
   <p>卡片模式</p>
   <v-calendar card style="width: 300px;"></v-calendar>
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
