<template>
<div>
   <h3>评分 Rate</h3>
   <br>
   <br>
   <p>基本</p>
   <v-rate v-model="value1"></v-rate>

    <br>
    <br>
    <p>半星</p>
    <v-rate v-model="value2" allow-half></v-rate>

    <br>
    <br>
    <p>文案</p>
    <v-rate v-model="value3" allow-half> {{value3}} 星</v-rate>

    <br>
    <br>
    <p>只读</p>
    <v-rate v-model="value4" allow-half readonly> {{value4}} 星</v-rate>

    <br>
    <br>
    <p>可清除</p>
    <v-rate v-model="value5" allow-half clearable> {{value5}} 星</v-rate>

    <br>
    <br>
    <p>自定义图标</p>
    <v-rate v-model="value6" allow-half clearable icon="smile-o"> {{value6}} 星</v-rate>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class RateDemo extends Vue {
  value1: number = 0

  value2: number = 2

  value3: number = 1

  value4: number = 3

  value5: number = 2

  value6: number = 2
}
</script>

<style lang="scss" scoped>

</style>
