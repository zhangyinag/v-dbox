import {Vue} from 'vue-property-decorator'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'
import Progress from './src/Progress.vue'

export {Progress}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Progress)
  }
}

export default plugin
