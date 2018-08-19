import Lang from '@/core/locale/Lang'
import enUS from '@/core/locale/lang/en_US'
import zhCN from '@/core/locale/lang/zh_CN'

const storage = new Map<string, Lang>()
storage.set('zh_cn', zhCN)
storage.set('en_us', enUS)

let defaultLang = zhCN

export default class LocaleProvider {
  register (name: string, lang: Lang): void {
    storage.set(name, lang)
  }

  get (name?: string): Lang {
    if (!name) return defaultLang
    return storage.get(name) || defaultLang
  }

  setDefaultLang (name: string): void {
    const lang = storage.get(name)
    if (lang) defaultLang = lang
  }
}
