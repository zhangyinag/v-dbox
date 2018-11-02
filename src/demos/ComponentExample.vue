<template>
<div :class="[$style.box]">
   <anchored-heading :level="3">{{titleText}}</anchored-heading>
   <p v-html="descText"></p>
   <div :class="[$style.exampleBox]">
      <div :class="[$style.boxHeader]"><a title="显示源码" @click="showSource=!showSource"> &lt; &gt; </a></div>
      <div :class="[$style.boxBody]">
         <div v-show="showSource">
            <pre><code class="html" ref="source">{{source}}</code></pre>
         </div>
         <component :is="component"></component>
      </div>
   </div>
</div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'
import hljs from 'highlight.js/lib'

@Component({
  components: {},
  })
export default class ComponentExample extends Vue {
  @Prop(String) title: string

  @Prop(Object) component: Vue

  @Prop(String) source: string

  @Prop(String) desc: string

  showSource: boolean = false

  get titleText (): string {
    if (this.title) return this.title
    if (!this.source) return ''
    return (this.source.match(/@title.*/)[0] || '').substr(6)
  }

  get descText (): string {
    if (this.desc) return this.desc
    if (!this.source) return ''
    return (this.source.match(/@desc.*/)[0] || '').substr(6)
  }

  mounted () {
    hljs.highlightBlock(this.$refs.source)
  }
}
</script>

<style lang="scss" module>
   .box{
      margin-bottom: 40px;
   }

   .exampleBox{
      border: #eee 1px  solid;
      border-radius: 4px;
      box-shadow:  0 2px 8px rgba(0, 0, 0, 0.15);
   }

   .boxHeader{
      height: 48px;
      border-bottom: #eee solid 1px;
      background-color: #f5f5f5;
      text-align: right;
      padding-right: 8px;
   }

   .boxBody{
      padding: 16px;
      background-color: #fff;
   }
</style>
