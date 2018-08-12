<template>
<div class="dbox-greet">{{t('greet.description')}}</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {Locale} from '@/components/locale'

@Component({
  components: {},
  mixins: [Locale],
  })
export default class Greet extends Vue {

}
</script>

<style lang="scss">
    .dbox-greet{
        color: red;
    }
</style>
