<template>
<div>
    <h2> 过渡 </h2>
    <br>
    <br>

    <div style="height: 120px;">
        <h3>fade</h3>
        <input type="checkbox" v-model="box1">
        <transition name="fade">
            <div class="motion-demo__box" v-show="box1"></div>
        </transition>
    </div>
    <br>
    <br>

    <h3>slide</h3>
    <div style="display: inline-block; width: 25%;">
        <span>slide-up  </span>
        <input type="checkbox" v-model="box2">
        <br>
        <transition name="slide-up">
            <div class="motion-demo__box" v-show="box2"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 25%;">
        <span>slide-down  </span>
        <input type="checkbox" v-model="box3">
        <br>
        <transition name="slide-down">
            <div class="motion-demo__box" v-show="box3"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 25%;">
        <span>slide-left  </span>
        <input type="checkbox" v-model="box4">
        <br>
        <transition name="slide-left">
            <div class="motion-demo__box" v-show="box4"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 25%;">
        <span>slide-right  </span>
        <input type="checkbox" v-model="box5">
        <br>
        <transition name="slide-right">
            <div class="motion-demo__box" v-show="box5"></div>
        </transition>
    </div>

    <br>
    <br>

    <div style="height: 120px;">
        <h3>swing</h3>
        <input type="checkbox" v-model="box6">
        <transition name="swing">
            <div class="motion-demo__box" v-show="box6"></div>
        </transition>
    </div>

    <br>
    <br>

    <h3>zoom</h3>
    <div style="display: inline-block; width: 33%;">
        <span>zoom  </span>
        <input type="checkbox" v-model="box7">
        <br>
        <transition name="zoom">
            <div class="motion-demo__box" v-show="box7"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 33%;">
        <span>zoom-big  </span>
        <input type="checkbox" v-model="box8">
        <br>
        <transition name="zoom-big">
            <div class="motion-demo__box" v-show="box8"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 33%;">
        <span>zoom-up  </span>
        <input type="checkbox" v-model="box9">
        <br>
        <transition name="zoom-up">
            <div class="motion-demo__box" v-show="box9"></div>
        </transition>
    </div>
    <br>
    <br>
    <div style="display: inline-block; width: 33%;">
        <span>zoom-down  </span>
        <input type="checkbox" v-model="box10">
        <br>
        <transition name="zoom-down">
            <div class="motion-demo__box" v-show="box10"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 33%;">
        <span>zoom-left  </span>
        <input type="checkbox" v-model="box11">
        <br>
        <transition name="zoom-left">
            <div class="motion-demo__box" v-show="box11"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 33%;">
        <span>zoom-right  </span>
        <input type="checkbox" v-model="box12">
        <br>
        <transition name="zoom-right">
            <div class="motion-demo__box" v-show="box12"></div>
        </transition>
    </div>

    <br>
    <br>

    <h3>move</h3>
    <div style="display: inline-block; width: 25%;">
        <span>move-up  </span>
        <input type="checkbox" v-model="box13">
        <br>
        <transition name="move-up">
            <div class="motion-demo__box" v-show="box13"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 25%;">
        <span>move-down  </span>
        <input type="checkbox" v-model="box14">
        <br>
        <transition name="move-down">
            <div class="motion-demo__box" v-show="box14"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 25%;">
        <span>move-left  </span>
        <input type="checkbox" v-model="box15">
        <br>
        <transition name="move-left">
            <div class="motion-demo__box" v-show="box15"></div>
        </transition>
    </div>
    <div style="display: inline-block; width: 25%;">
        <span>move-right  </span>
        <input type="checkbox" v-model="box16">
        <br>
        <transition name="move-right">
            <div class="motion-demo__box" v-show="box16"></div>
        </transition>
    </div>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({
  components: {},
  })
export default class MotionDemo extends Vue {
  box1: boolean = true
  box2: boolean = true
  box3: boolean = true
  box4: boolean = true
  box5: boolean = true
  box6: boolean = true
  box7: boolean = true
  box8: boolean = true
  box9: boolean = true
  box10: boolean = true
  box11: boolean = true
  box12: boolean = true
  box13: boolean = true
  box14: boolean = true
  box15: boolean = true
  box16: boolean = true
}
</script>

<style lang="scss" scoped>
    .motion-demo__box{
        height: 80px;
        width: 200px;
        background: #1890ff;
    }
</style>
