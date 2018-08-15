<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {resolveClassName} from '../../config'

@Component({
  components: {},
  })
export default class Greet extends Vue {
  c (className: string): string {
    return resolveClassName(className)
  }
}
</script>
