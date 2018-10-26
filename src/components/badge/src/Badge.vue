<template>
<span :class="[b(), aloneCls]">
    <slot></slot>
    <transition name="zoom-badge">
        <sup :class="[e('text'), dotCls]" :title="title || value" v-if="dot || text">{{text}}</sup>
    </transition>
</span>
</template>
<script lang="ts" src="./Badge.ts"></script>
