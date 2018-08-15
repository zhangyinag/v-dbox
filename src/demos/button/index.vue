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

   <br>
   <br>

   <p>图标按钮</p>
   <v-button icon="search"></v-button> &nbsp;
   <v-button type="primary" icon="search"></v-button> &nbsp;
   <v-button type="dashed" icon="search"></v-button> &nbsp;
   <v-button type="danger" icon="search"></v-button> &nbsp;
   &nbsp; &nbsp;
   <v-button type="dashed"><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   <v-button type="danger"><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   <v-button type="primary"><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   <v-button><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   &nbsp;
   <br>
   <br>

   <p>圆形按钮</p>
   <v-button shape="circle" icon="search"></v-button> &nbsp;
   <v-button type="primary" shape="circle" icon="search"></v-button> &nbsp;
   <v-button type="dashed" shape="circle" icon="search"></v-button> &nbsp;
   <v-button type="danger" shape="circle" icon="search"></v-button> &nbsp;

   <br>
   <br>

   <p>幽灵按钮</p>
   <div style="background: rgb(190, 200, 200); padding: 10px 20px;">
      <v-button ghost>Default</v-button> &nbsp;
      <v-button type="primary" ghost>Primary</v-button> &nbsp;
      <v-button type="dashed" ghost>Dashed</v-button> &nbsp;
      <v-button type="danger" ghost>Danger</v-button> &nbsp;
   </div>

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
