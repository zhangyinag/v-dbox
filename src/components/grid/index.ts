import {Vue} from 'vue-property-decorator'
import Col from './src/col.vue'
import Row from './src/row.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Col, Row}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-col', Col)
    vue.component(config.compPrefix + '-row', Row)
  }
}

export default plugin
