<template>
<div>
   <h3>模态框 Modal</h3>
   <br>
   <br>
   <p>基本</p>

   <v-button type="primary" @click="visible1 = true">打开</v-button>
   <v-modal :visible.sync="visible1">
      <p>this is a message</p>
   </v-modal>

   <br>
   <br>
   <p>标题 和 自定义 footer</p>

   <v-button type="primary" @click="visible2 = true">打开</v-button>
   <v-modal :visible.sync="visible2" title="基本模态框">
      <p>this is a message</p>
      <div slot="footer" style="text-align: right;">
         <v-button type="primary">确认</v-button>
      </div>
   </v-modal>

   <br>
   <br>
   <p>是否显示遮罩</p>
   <label><input type="checkbox" v-model="mask3"> 显示遮罩</label> <br>
   <v-button type="primary" @click="visible3 = true">打开</v-button>
   <v-modal :visible.sync="visible3" :mask="mask3" title="基本模态框">
      <p>this is a message</p>
      <div slot="footer" style="text-align: right;">
         <v-button type="primary">确认</v-button>
      </div>
   </v-modal>

   <br>
   <br>
   <p>嵌套</p>
   <v-button type="primary" @click="visible4 = true">打开</v-button>
   <v-modal :visible.sync="visible4" title="外层模态框" width="40vw">
      <div>
         <v-button type="danger" @click="visible5 = true">打开内层模态框</v-button>
         <v-modal :visible.sync="visible5" title="内层模态框">
            <p>this is a inner modal</p>
            <div slot="footer" style="text-align: right;">
               <v-button type="primary">确认</v-button>
            </div>
         </v-modal>
      </div>
      <div slot="footer" style="text-align: right;">
         <v-button type="primary">确认</v-button>
      </div>
   </v-modal>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {RemoteParam, RemoteResult, TableColumnFilter, TableColumnSelection} from '../../components/table/src/type'
@Component({
  components: {},
  })
export default class ModalDemo extends Vue {
  visible1: boolean = false

  visible2: boolean = false

  visible3: boolean = false

  mask3: boolean = true

  visible4: boolean = false

  visible5: boolean = false

  visible6: boolean = false
}
</script>

<style lang="scss" scoped>

</style>
