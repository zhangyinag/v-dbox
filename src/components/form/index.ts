import {Vue} from 'vue-property-decorator'
import Form from './src/Form.vue'
import FormItem from './src/FormItem.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {Form}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Form)
    registerComponent(vue, FormItem)
  }
}

export default plugin
