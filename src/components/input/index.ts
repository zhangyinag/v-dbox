import {Vue} from 'vue-property-decorator'
import Input from './src/index.vue'
import Autocomplete from './src/Autocomplete.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Input, Autocomplete}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-input', Input)
    vue.component(config.compPrefix + '-autocomplete', Autocomplete)
  }
}

export default plugin
