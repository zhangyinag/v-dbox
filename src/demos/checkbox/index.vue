<template>
<div>
   <h3>复选 checkbox</h3>
   <br>
   <br>
   <p>基本</p>
   <v-checkbox v-model="value1">checkbox</v-checkbox> &nbsp; [{{value1}}]
   <v-checkbox v-model="value2">checkbox</v-checkbox> &nbsp; [{{value2}}]
   <br>
   <v-checkbox v-model="value3" label="Jack">Jack</v-checkbox> &nbsp;
   <v-checkbox v-model="value3" label="Jone">Jone</v-checkbox> &nbsp; [{{value3}}]

   <br>
   <br>
   <p>禁用</p>
   <v-checkbox v-model="value4" disabled>unchecked</v-checkbox> &nbsp;
   <v-checkbox v-model="value5" disabled>checked</v-checkbox> &nbsp;

   <br>
   <br>
   <p>不确定状态</p>
   <label><input type="checkbox" v-model="value6"> 切换 </label> <br>
   <v-checkbox :indeterminate="value6">unchecked</v-checkbox> &nbsp;
   <v-checkbox indeterminate disabled>checked</v-checkbox> &nbsp;
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
  value4: boolean = false
  value5: boolean = true
  value6: boolean = true
  value7: boolean = true
  disabled1: boolean = true
  disabled2: boolean = true
}
</script>

<style lang="scss" scoped>

</style>
