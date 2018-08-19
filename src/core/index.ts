import Lang from '@/core/locale/Lang'
import BaseComponent from '@/core/BaseComponent'

export {Lang, BaseComponent}

export interface InstallationOptions {
  lang?: Lang
  cssPrefix?: string
  compPrefix?: string
}
