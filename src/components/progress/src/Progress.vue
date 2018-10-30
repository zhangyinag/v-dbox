<template>
    <div :class="[b(), typeCls, showTextCls, statusCls]">
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
    </div>
</template>
<script lang="ts" src="./Progress.ts"></script>
