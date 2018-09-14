import Lang from '@/core/locale/Lang'
import BaseComponent from '@/core/BaseComponent'
import {Vue} from 'vue-property-decorator'
import {VueConstructor} from 'vue/types/vue'
import config from '@/core/config'
import {hyphenate} from '@/utils'

export {Lang, BaseComponent}

export {registerComponent}

export interface InstallationOptions {
  lang?: Lang
  cssPrefix?: string
  compPrefix?: string
}

function registerComponent<VC extends VueConstructor> (vue: typeof Vue, constructor: VC): void {
  vue.component(`${config.compPrefix}-` + hyphenate(constructor.name), constructor)
}
