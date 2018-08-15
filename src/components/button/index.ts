import {Vue} from 'vue-property-decorator'
import Button from './src/index.vue'
import {InstallationOptions, resolveCompName} from '@/components/config'

export {Button}

export default function install (vue: typeof Vue, opt: InstallationOptions = {}): void {
  vue.component(resolveCompName('button'), Button)
}
