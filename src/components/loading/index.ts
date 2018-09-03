import {Vue} from 'vue-property-decorator'
import Loading from './src/index.vue'
import LoadingDirective from './src/LoadingDerective'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Loading, LoadingDirective}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-loading', Loading)
    vue.directive(config.compPrefix + '-loading', new LoadingDirective())
  }
}

export default plugin
