<template>
<div>
   <v-progress :precent="30"></v-progress>
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
export default class Basic extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
