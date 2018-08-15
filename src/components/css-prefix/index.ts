import {Vue} from 'vue-property-decorator'
import CssPrefix from './src/index.vue'
import {InstallationOptions, resolveCompName} from '@/components/config'

export {CssPrefix}

export default function install (vue: typeof Vue, opt: InstallationOptions = {}): void {
}
