import {Vue} from 'vue-property-decorator'
import Select from './src/index.vue'
import Option from './src/Option.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Select, Option}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-select', Select)
    vue.component(config.compPrefix + '-option', Option)
  }
}

export default plugin
