import {Vue} from 'vue-property-decorator'
import Tooltip from './src/Tooltip.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {Tooltip}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Tooltip)
  }
}

export default plugin
