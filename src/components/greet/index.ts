import {Vue} from 'vue-property-decorator'
import Greet from './src/index.vue'
import {InstallationOptions, resolveCompName} from '@/components/config'

export {Greet}

export default function install (vue: typeof Vue, opt: InstallationOptions = {}): void {
  vue.component(resolveCompName('greet'), Greet)
}
