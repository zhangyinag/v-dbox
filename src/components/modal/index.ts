import {Vue} from 'vue-property-decorator'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'
import Modal from './src/Modal.vue'

export {Modal}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Modal)
  }
}

export default plugin
