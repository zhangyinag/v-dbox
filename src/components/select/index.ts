import {Vue} from 'vue-property-decorator'
import Select from './src/index.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Select}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-select', Select)
  }
}

export default plugin
