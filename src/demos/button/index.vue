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
   <br>

   <p>类型</p>
   <v-button>默认 (default)</v-button> &nbsp;
   <v-button type="primary">主要 (primary)</v-button> &nbsp;
   <v-button type="dashed">虚线(dashed)</v-button> &nbsp;
   <v-button type="danger">危险(danger)</v-button> &nbsp;
   <v-button type="text">文字(text)</v-button> &nbsp;

   <br>
   <br>
   <br>

   <p>图标按钮</p>
   <v-button icon="search"></v-button> &nbsp;
   <v-button type="primary" icon="search"></v-button> &nbsp;
   <v-button type="dashed" icon="search"></v-button> &nbsp;
   <v-button type="danger" icon="search"></v-button> &nbsp;
   <v-button type="text" icon="search"></v-button> &nbsp;
   &nbsp; &nbsp;
   <v-button type="dashed"><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   <v-button type="danger"><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   <v-button type="primary"><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   <v-button type="text"><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   <v-button><v-icon type="search"></v-icon> Search</v-button> &nbsp;
   &nbsp;
   <br>
   <br>
   <br>

   <p>形状(圆形， 圆角)</p>
   <v-button shape="circle" icon="search"></v-button> &nbsp;
   <v-button type="primary" shape="circle" icon="search"></v-button> &nbsp;
   <v-button type="dashed" shape="circle" icon="search"></v-button> &nbsp;
   <v-button type="danger" shape="circle" icon="search"></v-button> &nbsp;

   <br>
   <br>

   <v-button shape="round" icon="search">Default</v-button> &nbsp;
   <v-button type="primary" shape="round" icon="search">Primary</v-button> &nbsp;
   <v-button type="dashed" shape="round" icon="search">Dashed</v-button> &nbsp;
   <v-button type="danger" shape="round" icon="search">Danger</v-button> &nbsp;

   <br>
   <br>
   <br>

   <p>幽灵按钮</p>
   <div style="background: rgb(190, 200, 200); padding: 10px 20px;">
      <v-button ghost>Default</v-button> &nbsp;
      <v-button type="primary" ghost>Primary</v-button> &nbsp;
      <v-button type="dashed" ghost>Dashed</v-button> &nbsp;
      <v-button type="danger" ghost>Danger</v-button> &nbsp;
   </div>

   <br>
   <br>
   <br>

   <p>禁用状态</p>
   <v-button>默认 (default)</v-button> &nbsp;<v-button disabled>默认 (default)</v-button> &nbsp;
   <v-button type="primary">主要 (primary)</v-button> &nbsp; <v-button type="primary" disabled>主要 (primary)</v-button> &nbsp;
   <br>
   <br>
   <v-button type="dashed">虚线(dashed)</v-button> &nbsp; <v-button type="dashed" disabled>虚线(dashed)</v-button> &nbsp;
   <v-button type="danger">危险(danger)</v-button> &nbsp; <v-button type="danger" disabled>危险(danger)</v-button> &nbsp;
   <v-button type="text">文字(text)</v-button> &nbsp; <v-button type="text" disabled>文字(text)</v-button> &nbsp;
   <br>
   <br>
   <div style="background: rgb(190, 200, 200); padding: 10px 20px;">
      <v-button ghost>Default</v-button> &nbsp;  <v-button disabled ghost>Default</v-button> &nbsp;
      <v-button type="primary" ghost>Primary</v-button> &nbsp;  <v-button type="primary" disabled ghost>Primary</v-button> &nbsp;
   </div>

   <br>
   <br>
   <br>

   <p>加载状态 (loading) <input type="checkbox" v-model="loading"></p>
   <v-button :loading="loading">默认 (default)</v-button> &nbsp;
   <v-button :loading="loading" type="primary">主要 (default)</v-button> &nbsp;
   <v-button :loading="loading" icon="search">Search</v-button> &nbsp;
   <v-button  :loading="loading" icon="search" shape="circle"></v-button> &nbsp;

   <br>
   <br>

   <v-button size="sm" :loading="loading">默认 (default)</v-button> &nbsp;
   <v-button size="sm" :loading="loading" type="primary">主要 (default)</v-button> &nbsp;
   <v-button size="sm" :loading="loading" icon="search">Search</v-button> &nbsp;
   <v-button size="sm"  :loading="loading" icon="search" shape="circle"></v-button> &nbsp;

   <br>
   <br>

   <v-button size="lg" :loading="loading">默认 (default)</v-button> &nbsp;
   <v-button size="lg" :loading="loading" type="primary">主要 (default)</v-button> &nbsp;
   <v-button size="lg" :loading="loading" icon="search">Search</v-button> &nbsp;
   <v-button size="lg"  :loading="loading" icon="search" shape="circle"></v-button> &nbsp;

   <br>
   <br>
   <br>

   <p>按钮组</p>
   <v-button-group>
      <v-button type="primary" icon="left">上一页</v-button>
      <v-button type="primary" icon="right">下一页</v-button>
   </v-button-group>
   &nbsp;&nbsp;
   <v-button-group>
      <v-button type="primary" icon="left">上一页</v-button>
      <v-button type="primary">1</v-button>
      <v-button type="primary">2</v-button>
      <v-button type="primary">3</v-button>
      <v-button type="primary" icon="right">下一页</v-button>
   </v-button-group>

   <br>
   <br>

   <v-button-group>
      <v-button icon="left">上一页</v-button>
      <v-button icon="right">下一页</v-button>
   </v-button-group>
   &nbsp;&nbsp;
   <v-button-group>
      <v-button icon="left">上一页</v-button>
      <v-button>1</v-button>
      <v-button>2</v-button>
      <v-button>3</v-button>
      <v-button icon="right">下一页</v-button>
   </v-button-group>

   <br>
   <br>

   <v-button-group>
      <v-button type="danger" icon="left">上一页</v-button>
      <v-button type="danger" icon="right">下一页</v-button>
   </v-button-group>
   &nbsp;&nbsp;
   <v-button-group>
      <v-button type="danger" icon="left">上一页</v-button>
      <v-button type="danger">1</v-button>
      <v-button type="danger">2</v-button>
      <v-button type="danger">3</v-button>
      <v-button type="danger" icon="right">下一页</v-button>
   </v-button-group>

   <br>
   <br>

   <v-button-group>
      <v-button type="dashed" icon="left">上一页</v-button>
      <v-button type="dashed" icon="right">下一页</v-button>
   </v-button-group>
   &nbsp;&nbsp;
   <v-button-group>
      <v-button type="dashed" icon="left">上一页</v-button>
      <v-button type="dashed">1</v-button>
      <v-button type="dashed">2</v-button>
      <v-button type="dashed">3</v-button>
      <v-button type="dashed" icon="right">下一页</v-button>
   </v-button-group>

   <br>
   <br>
   <br>

   <p>块级按钮</p>
   <div style="width: 320px;">
      <v-button block>默认 (default)</v-button> &nbsp;
      <br><br>
      <v-button block type="primary">主要 (primary)</v-button> &nbsp;
      <br><br>
      <v-button block type="dashed">虚线(dashed)</v-button> &nbsp;
      <br><br>
      <v-button block type="danger">危险(danger)</v-button> &nbsp;
   </div>

   <br>
   <br>
   <br>

   <p>点击事件</p>
   <input type="range" v-model="range"> &nbsp; {{range  / 10 }} s <br>
   <v-button @click="onClick" :delay="range * 100">自定义延时</v-button> &nbsp;
   <v-button @click="onClick">默认不延时</v-button> &nbsp;
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class ButtonDemo extends Vue {
  loading: boolean = false

  range: number = 0

  onClick () {
    console.count('click')
  }
}
</script>

<style lang="scss" scoped>

</style>
