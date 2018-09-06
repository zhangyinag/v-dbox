<template>
<div>
   <h3>标签 tag</h3>
   <br>
   <br>
   <p>基本</p>
   <v-tag>tag 1</v-tag>

   <br>
   <br>
   <p>链接</p>
   <v-tag><a href="http://baidu.com">百度一下</a></v-tag>

   <br>
   <br>
   <p>可关闭</p>
   <v-tag closable v-if="value1" @close="value1 = false">tag 2</v-tag>
   <v-tag closable v-if="value2" @close="value2 = false">tag 3</v-tag>
   <v-tag closable v-if="value3" @close="value3 = false">tag 4</v-tag>
   <v-tag closable v-if="value4" @close="value4 = false">tag 5</v-tag>

</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {},
  })
export default class TagDemo extends Vue {
  value1: boolean = true
  value2: boolean = true
  value3: boolean = true
  value4: boolean = true
}
</script>

<style lang="scss" scoped>
</style>
