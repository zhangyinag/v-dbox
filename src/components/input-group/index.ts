import {Vue} from 'vue-property-decorator'
import InputGroup from './src/InputGroup.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {InputGroup}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, InputGroup)
  }
}

export default plugin
