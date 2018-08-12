import defaultLang from '../lang/zh_CN'
import {Lang} from '@/components/config'

let lang: Lang = defaultLang

export const t = function (path: string) {
  const array = path.split('.')
  let current = lang as any
  let value = ''
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property]
    if (i === j - 1) { return value }
    if (!value) { return '' }
    current = value
  }
  return ''
}

export const use = function (l?: Lang) {
  lang = l || lang
}

export default {
  methods: {
    t (...args: string[]) {
      return t.apply(this, args)
    }
  }
}
