<template>
<div>
   <v-progress :percent="30" type="circle"></v-progress>
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
export default class Circle extends Vue {

}
</script>

<style lang="scss" scoped>

</style>
