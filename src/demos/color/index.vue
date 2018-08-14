<template>
<div>
    <p>Dust Red / 薄暮</p>
    <div>
        <div class="color-demo-box" :class="['red-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Volcano / 火山</p>
    <div>
        <div class="color-demo-box" :class="['volcano-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Sunset Orange / 日暮</p>
    <div>
        <div class="color-demo-box" :class="['orange-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Calendula Gold / 金盏花</p>
    <div>
        <div class="color-demo-box" :class="['gold-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Sunrise Yellow / 日出</p>
    <div>
        <div class="color-demo-box" :class="['yellow-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Lime / 青柠</p>
    <div>
        <div class="color-demo-box" :class="['lime-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Polar Green / 极光绿</p>
    <div>
        <div class="color-demo-box" :class="['green-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Cyan / 明青</p>
    <div>
        <div class="color-demo-box" :class="['cyan-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Daybreak Blue / 拂晓蓝</p>
    <div>
        <div class="color-demo-box" :class="['blue-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Geek Blue / 极客蓝</p>
    <div>
        <div class="color-demo-box" :class="['geekblue-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Golden Purple / 酱紫</p>
    <div>
        <div class="color-demo-box" :class="['purple-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>

    <p>Magenta / 法式洋红</p>
    <div>
        <div class="color-demo-box" :class="['magenta-' + i]" v-for="i in 10" :key="i"></div>
    </div>
    <br/>
    <br/>
</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

@Component({
  components: {},
  })
export default class ColorDemo extends Vue {
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixins/colorPalette.scss";
.color-demo-box{
    height: 100px;
    width: 80px;
    display: inline-block;
}

@mixin colorSeq ($name, $color){
    @for $i from 1 through 10 {
        .#{$name}-#{$i} {
            background: colorPalette($color, $i);
            &::after{
                content: "#{colorPalette($color, $i)}";
                color: invert(colorPalette($color, $i));
                line-height: 100px;
                padding-left: 10px;
            }
        }
    }
}

@include colorSeq('red', #f5222d);
@include colorSeq('volcano', #fa541c);
@include colorSeq('orange', #fa8c16);
@include colorSeq('gold', #faad14);
@include colorSeq('yellow', #fadb14);
@include colorSeq('lime', #a0d911);
@include colorSeq('green', #52c41a);
@include colorSeq('cyan', #13c2c2);
@include colorSeq('blue', #1890ff);
@include colorSeq('geekblue', #2f54eb);
@include colorSeq('purple', #722ed1);
@include colorSeq('magenta', #eb2f96);
</style>
