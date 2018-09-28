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
}
</script>

<style lang="scss" scoped>

</style>
