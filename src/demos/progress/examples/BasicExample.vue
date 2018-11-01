<template>
<div>
   <v-progress :percent="30"></v-progress>
   <v-progress :percent="30" status="active"></v-progress>
   <v-progress :percent="30" status="success"></v-progress>
   <v-progress :percent="30" status="exception"></v-progress>
   <v-progress :percent="30" :show-text="false"></v-progress>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

/**
 * @title 基本用法
 * @desc 标准进度条
 */
@Component({
  components: {},
  })
export default class BasicExample extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
