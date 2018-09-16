import {Vue} from 'vue-property-decorator'
import Checkbox from './src/Checkbox.vue'
import CheckboxGroup from './src/CheckboxGroup.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {Checkbox, CheckboxGroup}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Checkbox)
    registerComponent(vue, CheckboxGroup)
  }
}

export default plugin
