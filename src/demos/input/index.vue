<template>
<div>
   <h3>输入框</h3>
   <br>
   <br>
   <p>基本</p>
   <v-input class="input" placeholder="请输入内容" v-model="value1"></v-input>

   <br>
   <br>
   <p>禁用</p>
   <input type="checkbox" v-model="disabled"> 切换 &nbsp;
   <v-input class="input" placeholder="请输入内容" v-model="value2" :disabled="disabled"></v-input>

   <br>
   <br>
   <p>尺寸</p>
   <v-input class="input" placeholder="请输入内容" size="sm" v-model="value3"></v-input> &nbsp;
   <v-input class="input" placeholder="请输入内容" v-model="value4"></v-input> &nbsp;
   <v-input class="input" placeholder="请输入内容" size="lg" v-model="value5"></v-input> &nbsp;

   <br>
   <br>
   <p>前后置标签</p>
   <v-input class="input" placeholder="请输入内容" v-model="value6">
      <template slot="prepend">http://</template>
      <template slot="append">.com</template>
   </v-input>
   <br>
   <small>搜索按钮</small>
   <br>
   <v-input class="input" placeholder="请输入内容" v-model="value7">
       <v-button type="primary" icon="search" slot="append"></v-button>
   </v-input>
   <br>

   <br>
   <br>
   <p>前缀/后缀</p>
   <small>slot方式</small>
   <br>
   <v-input class="input" placeholder="请输入内容" v-model="value8">
      <template slot="prefix"><v-icon type="user"></v-icon></template>
      <template slot="suffix"><v-icon type="search"></v-icon></template>
   </v-input>
   <br>
   <small>属性方式</small>
   <br>
   <v-input class="input" placeholder="请输入内容" v-model="value9" prefix-icon="search" suffix-icon="user"></v-input>

   <br>
   <br>
   <p>可清空</p>
   <v-input class="input" placeholder="请输入内容" v-model="value10" clearable ></v-input>
   <br>
   <v-input class="input" placeholder="请输入内容" v-model="value11" prefix-icon="user" suffix-icon="search" clearable ></v-input>

   <br>
   <br>
   <p>文本域</p>
   <v-input class="input" type="textarea" placeholder="请输入内容" v-model="value12" ></v-input>
   <br>
   <small>指定行/列</small>
   <v-input class="input" type="textarea" placeholder="请输入内容" rows="6" cols="10" v-model="value12" ></v-input>
   <br>
   <small>自动尺寸</small>
   <v-input class="input" type="textarea" placeholder="请输入内容" autosize v-model="value13" ></v-input>
   <br>
   <small>自动尺寸(设置最大最小值)</small>
   <v-input class="input" type="textarea" placeholder="请输入内容" :autosize="{maxRows: 5, minRows: 2}" v-model="value14" ></v-input>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class InputDemo extends Vue {
  value1: string = ''
  value2: string = ''
  value3: string = ''
  value4: string = ''
  value5: string = ''
  value6: string = ''
  value7: string = ''
  value8: string = ''
  value9: string = ''
  value10: string = ''
  value11: string = ''
  value12: string = ''
  value13: string = ''
  value14: string = ''
  disabled: boolean = false
}
</script>

<style lang="scss" scoped>
   .input{
      width: 240px;
   }
</style>
