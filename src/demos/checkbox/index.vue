<template>
<div>
   <h3>复选 checkbox</h3>
   <br>
   <br>
   <p>基本</p>
   <v-checkbox v-model="value1">checkbox</v-checkbox> &nbsp;
   <v-checkbox v-model="value2">checkbox</v-checkbox> &nbsp;
   <br>
   <v-checkbox v-model="value3" label="Jack">Jack</v-checkbox> &nbsp;
   <v-checkbox v-model="value3" label="Jone">Jone</v-checkbox> &nbsp;
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class CheckboxDemo extends Vue {
  value1: boolean = false
  value2: boolean = true
  value3: string[] = ['Jack']
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
