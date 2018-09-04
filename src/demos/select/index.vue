<template>
<div>
   <h3>下拉框 select</h3>
   <br>
   <br>
   <p>基本</p>
   <v-select class="select" v-model="value1">ll</v-select>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class SelectedDemo extends Vue {
  value1: string = ''
}
</script>

<style lang="scss" scoped>
.select{
   width: 240px;
}
</style>
