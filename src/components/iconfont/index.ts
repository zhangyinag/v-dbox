import {Vue} from 'vue-property-decorator'
import {InstallationOptions} from '@/components/config'
import IconFont from './src/index.vue'

export {IconFont}

export default function install (vue: typeof Vue, opt: InstallationOptions = {}): void {
  vue.component('v-icon', IconFont)
}
