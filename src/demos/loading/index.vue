<template>
<div>
   <h3>加载 loading</h3>
   <br>
   <br>
   <p>基本</p>
   <div style="height: 100px; width: 200px; border: 1px solid #1890ff; position: relative;">
      <v-loading></v-loading>
   </div>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class RadioDemo extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
