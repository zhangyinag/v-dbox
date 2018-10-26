<template>
    <transition name="fade">
        <div :class="[e('wrapper'), maskCls]" v-show="visible" @click.self="onWrapperClick" @keyup.esc="onWrapperEsc">
            <transition name="zoom">
                <div :class="[b()]" :style="[widthStyle, topStyle, transformOriginStyle]" v-show="visible" ref="modal">
                    <div tabindex="0" :class="[e('tab')]" ref="tab">tab 0</div>
                    <div :class="[e('content')]">
                        <div :class="[e('close')]" v-if="showClose" @click="onClose">
                            <i class="anticon anticon-close"></i>
                        </div>
                        <div :class="[e('header')]" v-if="title">
                            <div :class="[e('title')]">{{title}}</div>
                        </div>
                        <div :class="[e('body')]"><slot></slot></div>
                        <div :class="[e('footer')]" v-if="$slots.footer"><slot name="footer"></slot></div>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>
<script lang="ts" src="./Modal.ts"></script>
