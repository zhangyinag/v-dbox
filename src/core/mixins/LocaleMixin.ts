import Component from 'vue-class-component'
import {Vue} from 'vue-property-decorator'
import {translate} from '@/core/locale'
import {camelize} from '@/utils'

@Component
export default class LocaleMixin extends Vue {
  t (path: string): string | string[] {
    let name = camelize(this.constructor.name)
    return translate(path) || translate(name + '.' + path)
  }
}
