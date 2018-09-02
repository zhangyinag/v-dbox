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

   <br>
   <br>
   <p>自动完成 <span style="color: red;">(to be done)</span></p>
   <v-autocomplete class="input" placeholder="请输入搜索内容" v-model="value15" :fetch-suggestions="querySearch1"></v-autocomplete>

   <div style="margin-top: 480px;"></div>
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
  value15: string = ''
  value16: string = ''
  disabled: boolean = false

  querySearch1 (qs: string, cb: (data: any[]) => void) {
    let data = [
      { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
      { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
      { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
      { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
      { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
      { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
      { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
      { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
      { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
      { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
      { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
      { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' },
      { 'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
      { 'value': '浮生若茶（凌空soho店）', 'address': '上海长宁区金钟路968号9号楼地下一层' },
      { 'value': 'NONO JUICE  鲜榨果汁', 'address': '上海市长宁区天山西路119号' },
      { 'value': 'CoCo都可(北新泾店）', 'address': '上海市长宁区仙霞西路' },
      { 'value': '快乐柠檬（神州智慧店）', 'address': '上海市长宁区天山西路567号1层R117号店铺' },
      { 'value': 'Merci Paul cafe', 'address': '上海市普陀区光复西路丹巴路28弄6号楼819' },
      { 'value': '猫山王（西郊百联店）', 'address': '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
      { 'value': '枪会山', 'address': '上海市普陀区棕榈路' },
      { 'value': '纵食', 'address': '元丰天山花园(东门) 双流路267号' },
      { 'value': '钱记', 'address': '上海市长宁区天山西路' },
      { 'value': '壹杯加', 'address': '上海市长宁区通协路' },
      { 'value': '唦哇嘀咖', 'address': '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元' },
      { 'value': '爱茜茜里(西郊百联)', 'address': '长宁区仙霞西路88号1305室' },
      { 'value': '爱茜茜里(近铁广场)', 'address': '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺' },
      { 'value': '鲜果榨汁（金沙江路和美广店）', 'address': '普陀区金沙江路2239号金沙和美广场B1-10-6' },
      { 'value': '开心丽果（缤谷店）', 'address': '上海市长宁区威宁路天山路341号' },
      { 'value': '超级鸡车（丰庄路店）', 'address': '上海市嘉定区丰庄路240号' },
      { 'value': '妙生活果园（北新泾店）', 'address': '长宁区新渔路144号' },
      { 'value': '香宜度麻辣香锅', 'address': '长宁区淞虹路148号' },
      { 'value': '凡仔汉堡（老真北路店）', 'address': '上海市普陀区老真北路160号' },
      { 'value': '港式小铺', 'address': '上海市长宁区金钟路968号15楼15-105室' },
      { 'value': '蜀香源麻辣香锅（剑河路店）', 'address': '剑河路443-1' },
      { 'value': '北京饺子馆', 'address': '长宁区北新泾街道天山西路490-1号' },
      { 'value': '饭典*新简餐（凌空SOHO店）', 'address': '上海市长宁区金钟路968号9号楼地下一层9-83室' },
      { 'value': '焦耳·川式快餐（金钟路店）', 'address': '上海市金钟路633号地下一层甲部' },
      { 'value': '动力鸡车', 'address': '长宁区仙霞西路299弄3号101B' },
      { 'value': '浏阳蒸菜', 'address': '天山西路430号' },
      { 'value': '四海游龙（天山西路店）', 'address': '上海市长宁区天山西路' },
      { 'value': '樱花食堂（凌空店）', 'address': '上海市长宁区金钟路968号15楼15-105室' },
      { 'value': '壹分米客家传统调制米粉(天山店)', 'address': '天山西路428号' },
      { 'value': '福荣祥烧腊（平溪路店）', 'address': '上海市长宁区协和路福泉路255弄57-73号' },
      { 'value': '速记黄焖鸡米饭', 'address': '上海市长宁区北新泾街道金钟路180号1层01号摊位' },
      { 'value': '红辣椒麻辣烫', 'address': '上海市长宁区天山西路492号' },
      { 'value': '(小杨生煎)西郊百联餐厅', 'address': '长宁区仙霞西路88号百联2楼' },
      { 'value': '阳阳麻辣烫', 'address': '天山西路389号' },
      { 'value': '南拳妈妈龙虾盖浇饭', 'address': '普陀区金沙江路1699号鑫乐惠美食广场A13' }
    ]
    let result = data.filter(v => !qs || v.value.indexOf(qs) !== -1)
    setTimeout(() => {
      cb(result)
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
   .input{
      width: 240px;
   }
</style>
