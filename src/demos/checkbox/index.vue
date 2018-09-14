<template>
<div>
   <h3>复选 checkbox</h3>
   <br>
   <br>
   <p>基本</p>
   <v-checkbox>checkbox</v-checkbox>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class CheckboxDemo extends Vue {
  value1: string = ''
  value2: string = ''
  value3: string = ''
  value4: string = ''
  value5: string = ''
  value6: string = ''
  value7: string = ''
  value8: string = ''
  disabled1: boolean = true
}
</script>

<style lang="scss" scoped>

</style>
