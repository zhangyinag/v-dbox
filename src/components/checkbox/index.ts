import {Vue} from 'vue-property-decorator'
import Checkbox from './src/Checkbox.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {Checkbox}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Checkbox)
  }
}

export default plugin
