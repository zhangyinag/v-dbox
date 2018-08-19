import {Component, Vue} from 'vue-property-decorator'
import {translate} from '@/core/locale'
import config from '@/core/config'

/**
 * Vue TypeScript not supported mixins very well,
 * Use BaseComponent replace mixin's use
 */
@Component({
  components: {}
  })
export default class BaseComponent extends Vue {
  bemBlock: string = 'undefined';

  b (block?: string): string {
    return config.cssPrefix + '-' + (block || this.bemBlock)
  }

  e (ele: string, block?: string): string {
    return this.b(block) + '__' + ele
  }

  m (modifier: string, ele?: string, block?: string): string {
    if (ele) return this.e(ele, block) + '--' + modifier
    return this.b(block) + '--' + modifier
  }

  s (state: string): string {
    if (!config.cssStatePrefix) return state
    return config.cssStatePrefix + '-' + state
  }

  /**
   * Translate Lang
   * @param {string} path
   * @returns {string}
   */

  t (path: string): string {
    return translate(path)
  }
}
