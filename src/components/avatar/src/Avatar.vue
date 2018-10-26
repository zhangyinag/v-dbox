<template>
    <span :class="[b(), sizeCls, shapeCls, imageCls]">
        <icon-font :type="icon" v-if="icon" :class="[e('icon')]"></icon-font>
        <img v-if="src" :src="src" :class="[e('image')]"/>
        <span :class="[e('text')]" v-if="!src && !icon" ref="text"><slot></slot></span>
    </span>
</template>
<script lang="ts" src="./Avatar.ts"></script>
