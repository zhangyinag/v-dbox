<template>
    <div :class="[b(), typeCls]">
        <div :class="[e('outer')]">
            <div :class="[e('inner')]">
                <div :class="[e('bg')]" :style="[strokeWidthStyle, percentWidth]"></div>
            </div>
        </div>
        <span :class="[e('text')]">{{percent}}%</span>
    </div>
</template>
<script lang="ts" src="./Progress.ts"></script>
