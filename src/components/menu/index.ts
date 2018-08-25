import {Vue} from 'vue-property-decorator'
import Menu from './src/Menu.vue'
import SubMenu from './src/SubMenu.vue'
import MenuItem from './src/MenuItem.vue'
import MenuItemGroup from './src/MenuItemGroup.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Menu, MenuItem, SubMenu, MenuItemGroup}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-menu', Menu)
    vue.component(config.compPrefix + '-sub-menu', SubMenu)
    vue.component(config.compPrefix + '-menu-item', MenuItem)
    vue.component(config.compPrefix + '-menu-item-group', MenuItemGroup)
  }
}

export default plugin
