import LocaleProvider from '@/core/locale/LocaleProvider'

export const localeProvider = new LocaleProvider()

export function translate (path: string) {
  const array = path.split('.')
  let current = localeProvider.get() as any
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
