<template>
<div :class="[c('greet')]">{{t('greet.description')}}</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Locale} from '@/components/locale'
import {CssPrefix} from '@/components/css-prefix'

@Component({
  components: {},
  mixins: [Locale, CssPrefix],
  })
export default class Greet extends Vue {

}
</script>
