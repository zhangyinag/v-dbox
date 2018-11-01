<template>
<div>
   <v-progress :percent="30" type="circle"></v-progress> &nbsp;
   <v-progress :percent="60" type="circle" status="exception"></v-progress> &nbsp;
   <v-progress :percent="100" type="circle" status="success"></v-progress> &nbsp;
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

/**
 * @title 进度圈
 * @desc 圆形的进度
 */
@Component({
  components: {},
  })
export default class CircleExample extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
