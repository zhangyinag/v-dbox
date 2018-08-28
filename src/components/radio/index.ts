import {Vue} from 'vue-property-decorator'
import Radio from './src/index.vue'
import RadioGroup from './src/RadioGroup.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Radio, RadioGroup}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-radio', Radio)
    vue.component(config.compPrefix + '-radio-group', RadioGroup)
  }
}

export default plugin
