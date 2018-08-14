<template>
<div>
    <h2> 过渡 </h2>
    <br>
    <br>

    <h3>fade</h3>
    <input type="checkbox" v-model="box1">
    <transition name="fade">
        <div class="motion-demo__box" v-show="box1"></div>
    </transition>

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

    <h3>swing</h3>
    <input type="checkbox" v-model="box6">
    <transition name="swing">
        <div class="motion-demo__box" v-show="box6"></div>
    </transition>

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
}
</script>

<style lang="scss" scoped>
    .motion-demo__box{
        height: 80px;
        width: 200px;
        background: #1890ff;
    }
</style>
