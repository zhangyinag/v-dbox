<template>
<div>
   <h3>粘性定位 sticky</h3>
   <br>
   <br>
   <p>固定表头</p>
   <div style="height: 100px; overflow: auto;">
      <table style="width: 100%;">
         <thead v-sticky>
         <tr>
            <td>姓名</td>
            <td>年龄</td>
            <td>地址</td>
         </tr>
         </thead>
         <tbody>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
            <tr>
               <td>Alison</td>
               <td>23</td>
               <td>Shanghai China</td>
            </tr>
         </tbody>
      </table>
   </div>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class StickyDemo extends Vue {
}
</script>

<style lang="scss" module>
.box{
   width: 160px;
   height: 100px;
   background: #1890ff;
}
</style>
