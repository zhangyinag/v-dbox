import {Vue} from 'vue-property-decorator'
import TimePicker from './src/TimePicker.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {TimePicker}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, TimePicker)
  }
}

export default plugin
