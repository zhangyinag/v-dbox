<template>
<div>
   <h3>水波指令 Ripple</h3>

   <div :class="[$style.box]" v-ripple="true">

   </div>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class RippleDemo extends Vue {
  value1: boolean = false

  value2: boolean = false
}
</script>

<style lang="scss" module>
.box{
   width: 160px;
   height: 100px;
   background: #1890ff;
}
</style>
