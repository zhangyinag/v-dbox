import Component from 'vue-class-component'
import {Vue} from 'vue-property-decorator'
import config from '@/core/config'
import {hyphenate} from '@/utils'

@Component
export default class BemMixin extends Vue {
  b (block?: string): string {
    return config.cssPrefix + '-' + hyphenate((block || this.constructor.name))
  }

  e (ele: string, block?: string): string {
    return this.b(block) + '__' + ele
  }

  m (modifier: string, ele?: string, block?: string): string {
    if (ele) return this.e(ele, block) + '--' + modifier
    return this.b(block) + '--' + modifier
  }

  // deprecated (state class will not have any prefix)
  s (state: string): string {
    if (!config.cssStatePrefix) return state
    return config.cssStatePrefix + '-' + state
  }
}
