import {Vue} from 'vue-property-decorator'
import Layout from './src/Layout.vue'
import Header from './src/Header.vue'
import Footer from './src/Footer.vue'
import Sider from './src/Sider.vue'
import Content from './src/Content.vue'
import {InstallationOptions} from '@/core'
import config from '@/core/config'
import {PluginObject} from 'vue/types/plugin'

export {Layout, Header, Footer, Sider, Content}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    vue.component(config.compPrefix + '-layout', Layout)
    vue.component(config.compPrefix + '-header', Header)
    vue.component(config.compPrefix + '-footer', Footer)
    vue.component(config.compPrefix + '-sider', Sider)
    vue.component(config.compPrefix + '-content', Content)
  }
}

export default plugin
