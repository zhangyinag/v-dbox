<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {resolveClassName} from '../../config'

@Component({
  components: {},
  })
export default class Bem extends Vue {
  bemBlock: string = 'undefined';

  b (block?: string): string {
    return resolveClassName(block || this.bemBlock)
  }

  e (ele: string, block?: string): string {
    return this.b(block) + '__' + ele
  }

  m (modifier: string, ele?: string, block?: string): string {
    if (ele) return this.e(ele, block) + '--' + modifier
    return this.b(block) + '--' + modifier
  }
}
</script>
