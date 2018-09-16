import {Vue} from 'vue-property-decorator'
import DatePicker from './src/DatePicker.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {DatePicker}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, DatePicker)
  }
}

export default plugin
