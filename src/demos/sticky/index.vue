<template>
<div>
   <h3>粘性定位 sticky</h3>
   <br>
   <br>
   <p>固定表头</p>
   <div style="height: 100px; overflow: auto;">
      <table style="width: 100%; table-layout: fixed;">
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

   <br>
   <br>
   <p>固定列</p>
   <div style="width: 500px; height: 120px; overflow: auto;" @scroll="onScroll" ref="wrapper">
      <table style="width: 100%; table-layout: fixed;" ref="table">
        <colgroup>
           <col width="180">
           <col width="180">
           <col width="180">
           <col width="180">
        </colgroup>
         <thead ref="head">
         <tr>
            <td class="column-first" style="background-color:#e2e2e2;">姓名</td>
            <td style="background-color:#e2e2e2;">性别</td>
            <td style="background-color:#e2e2e2;">年龄</td>
            <td class="column-last" style="background-color:#e2e2e2;">地址</td>
         </tr>
         </thead>
         <tbody>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
         </tr>
         <tr>
            <td class="column-first">Alison</td>
            <td>女</td>
            <td>23</td>
            <td class="column-last">Shanghai China</td>
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
  onScroll () {
    let $src = this.$refs.wrapper as HTMLElement
    let $head = this.$refs.head as HTMLElement
    let $table = this.$refs.table as HTMLElement
    let $firsts = $table.getElementsByClassName('column-first')
    let $lasts = $table.getElementsByClassName('column-last')
    $head.style.transform = `translateY(${$src.scrollTop}px)`
    for (let i = 0; i < $firsts.length; i++) {
      $firsts[i].style.transform = `translateX(${$src.scrollLeft}px)`
    }
    for (let i = 0; i < $lasts.length; i++) {
      $lasts[i].style.transform = `translateX(${-($src.scrollWidth - $src.scrollLeft - $src.clientWidth)}px)`
    }
  }

  mounted () {
    this.onScroll()
  }
}
</script>

<style lang="scss" module>
.box{
   width: 160px;
   height: 100px;
   background: #1890ff;
}

:global(.column-first) {
   background-color: #fafafa;
}

:global(.column-last) {
   background-color: #fafafa;
}
</style>
