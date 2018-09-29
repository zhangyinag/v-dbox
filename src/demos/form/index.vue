<template>
<div>
   <h3>表单 Form</h3>
   <br>
   <br>
   <p>基本</p>
   <v-tooltip content="prompt text">Tooltip will show when mouse enter</v-tooltip>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class FormDemo extends Vue {
  value1: boolean = false

  value2: boolean = false
}
</script>

<style lang="scss" module>
</style>
