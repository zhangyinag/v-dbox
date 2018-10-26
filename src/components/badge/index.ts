import {Vue} from 'vue-property-decorator'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'
import Badge from './src/Badge.vue'

export {Badge}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Badge)
  }
}

export default plugin
