import {Vue} from 'vue-property-decorator'
import DatePicker from './src/DatePicker.vue'
import RangePicker from './src/RangePicker.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {DatePicker, RangePicker}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, DatePicker)
    registerComponent(vue, RangePicker)
  }
}

export default plugin
