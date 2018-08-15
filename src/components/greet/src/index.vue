<template>
<div :class="[b('greet')]">{{t('greet.description')}}</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Locale} from '@/components/locale'
import {Bem} from '@/components/bem'

@Component({
  components: {},
  mixins: [Locale, Bem],
  })
export default class Greet extends Vue {

}
</script>
