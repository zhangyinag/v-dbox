import {Vue} from 'vue-property-decorator'
import Dropdown from './src/Dropdown.vue'
import DropdownMenu from './src/DropdownMenu.vue'
import DropdownItem from './src/DropdownItem.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Dropdown, DropdownMenu, DropdownItem}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-dropdown', Dropdown)
    vue.component(config.compPrefix + '-dropdown-menu', DropdownMenu)
    vue.component(config.compPrefix + '-dropdown-item', DropdownItem)
  }
}

export default plugin
