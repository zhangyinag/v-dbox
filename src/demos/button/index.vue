<template>
<div>
   <h3>按钮</h3>
   <br>
   <p>尺寸</p>
   <v-button>基本按钮</v-button> &nbsp;
   <v-button size="lg">基本按钮（大）</v-button> &nbsp;
   <v-button size="sm">基本按钮（小）</v-button> &nbsp;

   <br>
   <br>

   <p>类型</p>
   <v-button>默认 (default)</v-button> &nbsp;
   <v-button type="primary">主要 (primary)</v-button> &nbsp;
   <v-button type="dashed">虚线(dashed)</v-button> &nbsp;
   <v-button type="danger">危险(danger)</v-button> &nbsp;

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class ButtonDemo extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
