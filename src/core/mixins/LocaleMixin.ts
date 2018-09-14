import Component from 'vue-class-component'
import {Vue} from 'vue-property-decorator'
import {translate} from '@/core/locale'

@Component
export default class LocaleMixin extends Vue {
  t (path: string): string {
    return translate(path)
  }
}
