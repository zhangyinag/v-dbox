import {Vue} from 'vue-property-decorator'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'
import Avatar from './src/Avatar.vue'

export {Avatar}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Avatar)
  }
}

export default plugin
