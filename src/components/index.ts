import {Vue} from 'vue/types/vue'
import {InstallationOptions} from '@/core'
import {PluginObject} from 'vue/types/plugin'
import installDirectives from '../core/directives/index'

const plugins: Array<PluginObject<InstallationOptions>> = []

const req = (require as any).context('', true, /index\.ts/)
const requireAll = (requireContext: any) => requireContext.keys().map((key: string) => {
  if (key.split('/').length !== 3) { return } //
  const plugin = requireContext(key).default as any
  plugins.push(plugin)
})
requireAll(req)

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    plugins.forEach((plugin) => plugin.install(vue, opt))
    installDirectives(vue)
  }
}

export default plugin
