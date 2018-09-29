<template>
<div>
   <h3>开关 Switch</h3>
   <br>
   <br>
   <p>基本</p>
   <v-switch v-model="value1"></v-switch>

   <br>
   <br>
   <p>带文案</p>
   <v-switch v-model="value2" active-text="On" inactive-text="Off"></v-switch>

   <br>
   <br>
   <p>禁用</p>
   <v-switch v-model="value3" active-text="On" inactive-text="Off" disabled></v-switch> &nbsp;
   <v-switch v-model="value4" active-text="On" inactive-text="Off" disabled></v-switch> &nbsp;

   <br>
   <br>
   <p>加载中</p>
   <label><input type="checkbox" v-model="loading1"> toggle</label> <br>
   <v-switch v-model="value5" active-text="On" inactive-text="Off" :loading="loading1"></v-switch> &nbsp;

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class SwitchDemo extends Vue {
  value1: boolean = false

  value2: boolean = false

  value3: boolean = false

  value4: boolean = true

  value5: boolean = true

  loading1: boolean = true
}
</script>

<style lang="scss" scoped>

</style>
