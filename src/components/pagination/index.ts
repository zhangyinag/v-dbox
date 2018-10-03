import {Vue} from 'vue-property-decorator'
import Pagination from './src/Pagination.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {Pagination}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Pagination)
  }
}

export default plugin
