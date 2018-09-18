import {Vue} from 'vue-property-decorator'
import Calendar from './src/Calendar.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {Calendar}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Calendar)
  }
}

export default plugin
