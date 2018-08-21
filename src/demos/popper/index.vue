<template>
<div>
   <h3>Popper</h3>
   <strong>基于 第三方组件 <strong>vue-popperjs</strong> 改写</strong><br>
   <code><a href="https://www.npmjs.com/package/vue-popperjs" target="_blank">vue-popperjs Reference</a></code><br>
   <code><a href="https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md" target="_blank">popper.js Reference</a></code>
   <br>
   <br>
   <p>基本</p>

   <v-popper trigger="click" :options="{placement: 'top'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         Reference Element
      </a>
   </v-popper>

   <br>
   <br>

   <p>hover触发</p>

   <v-popper trigger="hover" :options="{placement: 'top'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         hover
      </a>
   </v-popper>

   <br>
   <br>

   <p>禁用</p>
   <input type="checkbox" v-model="disabled"> <br>
   <v-popper trigger="hover" :disabled="disabled" :options="{placement: 'top'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         disabled
      </a>
   </v-popper>

   <br>
   <br>

   <p>延时</p>
   <label>进入延时</label><br>
   <input v-model.number="delayOnMouseOver" type="range" min="0" step="10" max="2000">&nbsp; {{delayOnMouseOver}}<br>
   <br>
   <label>退出延时</label><br>
   <input v-model.number="delayOnMouseOut" type="range" min="0" step="10" max="2000">&nbsp; {{delayOnMouseOut}}<br>
   <br>

   <v-popper trigger="hover"
             :delay-on-mouse-over="delayOnMouseOver"
             :delay-on-mouse-out="delayOnMouseOut"
             :options="{placement: 'top'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         delay
      </a>
   </v-popper>

   <br>
   <br>

   <p>位置</p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <v-popper trigger="click" :options="{placement: 'top'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         top
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'top-start'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         top-start
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'top-end'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         top-end
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <v-popper trigger="click" :options="{placement: 'bottom'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         bottom
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'bottom-start'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         bottom-end
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'bottom-end'}">
      <div class="popper">
         Popper Content
      </div>

      <a slot="reference">
         bottom-end
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <v-popper trigger="click" :options="{placement: 'right'}">
      <div class="popper">
         <p>A</p>
         <p>B</p>
         <p>C</p>
         <p>D</p>
         <p>E</p>
      </div>

      <a slot="reference">
         right
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'right-start'}">
      <div class="popper">
         <p>A</p>
         <p>B</p>
         <p>C</p>
         <p>D</p>
         <p>E</p>
      </div>

      <a slot="reference">
         right-end
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'right-end'}">
      <div class="popper">
         <p>A</p>
         <p>B</p>
         <p>C</p>
         <p>D</p>
         <p>E</p>
      </div>

      <a slot="reference">
         right-end
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <v-popper trigger="click" :options="{placement: 'left'}">
      <div class="popper">
         <p>A</p>
         <p>B</p>
         <p>C</p>
         <p>D</p>
         <p>E</p>
      </div>

      <a slot="reference">
         left
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'left-start'}">
      <div class="popper">
         <p>A</p>
         <p>B</p>
         <p>C</p>
         <p>D</p>
         <p>E</p>
      </div>

      <a slot="reference">
         left-end
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <v-popper trigger="click" :options="{placement: 'left-end'}">
      <div class="popper">
         <p>A</p>
         <p>B</p>
         <p>C</p>
         <p>D</p>
         <p>E</p>
      </div>

      <a slot="reference">
         left-end
      </a>
   </v-popper>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

   <br>
   <br>
   <p>过渡 (依赖于 motion)</p>

   <v-popper trigger="click" :options="{placement: 'top'}" transition="fade">
      <div class="popper demo-tooltip">
         this is tooltip
      </div>

      <a slot="reference">
         tooltip
      </a>
   </v-popper>

   <br>
   <br>
   <small>
      由于 popper.js 并不总是可以使用vue的过渡系统， 这里改写了enter-active-class/leave-active-class实现; <br>
      对于transform之类的过渡或动画， 需要关闭gpuAcceleration
   </small>
   <br>
   <v-popper trigger="click"
             transition="slide-up"
             enter-active-class="slide-up-enter-active"
             leave-active-class="slide-up-leave-active"
             :options="{placement: 'bottom',modifiers: {
          computeStyle: {
            gpuAcceleration: false
          }
        }}">
      <div class="popper" id="test">
         <ul>
            <li>苹果</li>
            <li>梨</li>
            <li>西瓜</li>
            <li>橘子</li>
         </ul>
      </div>

      <a slot="reference">
         dropdown
      </a>
   </v-popper>

   <div style="margin-bottom: 120px;"></div>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class PopperDemo extends Vue {
  delayOnMouseOver: number = 10

  delayOnMouseOut: number = 10

  disabled: boolean = false
}
</script>

<style lang="scss">
   .popper.demo-tooltip {
      line-height: 32px;
      color: #fff;
      background: #212121;
      padding: 0 20px;
      border-radius: 4px;
      border-color: #212121;

      &[x-placement^="top"] .popper__arrow {
         border-color: #212121 transparent transparent transparent;
      }
      &[x-placement^="bottom"] .popper__arrow {
         border-color: transparent transparent #212121 transparent;
      }
      &[x-placement^="right"] .popper__arrow {
         border-color: transparent #212121 transparent transparent;
      }
      &[x-placement^="left"] .popper__arrow {
         border-color: transparent transparent transparent #212121;
      }
   }
</style>
