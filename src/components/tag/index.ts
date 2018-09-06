import {Vue} from 'vue-property-decorator'
import Tag from './src/index.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Tag}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-tag', Tag)
  }
}

export default plugin
