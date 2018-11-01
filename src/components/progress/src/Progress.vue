<template>
    <div :class="[b(), typeCls, showTextCls, statusCls]">
        <template v-if="type === 'line'">
            <div :class="[e('outer')]">
                <div :class="[e('inner')]">
                    <div :class="[e('bg')]" :style="[strokeWidthStyle, percentWidth]"></div>
                </div>
            </div>
            <span :class="[e('text')]" v-if="showText">
                <i class="anticon anticon-close-circle" v-if="status === 'exception'"></i>
                <i class="anticon anticon-check-circle" v-else-if="status === 'success'"></i>
                <template v-else>{{percent}}%</template>
            </span>
        </template>
        <template v-if="type === 'circle'">
            <div :class="[e('inner')]" :style="[circleInnerStyle]">
                <progress-circle :percent="percent"></progress-circle>
                <span :class="[e('text')]" v-if="showText">
                    <i class="anticon anticon-close" v-if="status === 'exception'"></i>
                    <i class="anticon anticon-check" v-else-if="status === 'success'"></i>
                    <template v-else>{{percent}}%</template>
                </span>
            </div>
        </template>
    </div>
</template>
<script lang="ts" src="./Progress.ts"></script>
