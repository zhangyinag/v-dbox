import {Vue} from 'vue-property-decorator'
import Locale, {use, t} from './src/index'
import {InstallationOptions} from '@/components/config'

export {Locale, use}

export default function install (vue: typeof Vue, opt: InstallationOptions = {}): void {
  use(opt.lang)
}
