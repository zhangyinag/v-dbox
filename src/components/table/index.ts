import {Vue} from 'vue-property-decorator'
import Table from './src/Table.vue'
import TableColumn from './src/TableColumn.vue'
import {InstallationOptions, registerComponent} from '@/core'
import {PluginObject} from 'vue/types/plugin'

export {Table, TableColumn}

const plugin: PluginObject<InstallationOptions> = {
  install: function (vue: typeof Vue, opt: InstallationOptions = {}): void {
    registerComponent(vue, Table)
    registerComponent(vue, TableColumn)
  }
}

export default plugin
