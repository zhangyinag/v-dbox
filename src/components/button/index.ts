import {Vue} from 'vue-property-decorator'
import Button from './src/index.vue'
import ButtonGroup from './src/ButtonGroup.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Button, ButtonGroup}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-button', Button)
    vue.component(config.compPrefix + '-button-group', ButtonGroup)
  }
}

export default plugin
