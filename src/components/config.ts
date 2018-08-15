export interface InstallationOptions {
  lang?: Lang,
  cssPrefix?: string,
  compPrefix?: string
}

export interface Lang {
  greet: {
    description: string
  }
}

export const prefix = {
  css: 'ant',
  comp: 'v'
}
export let cssPrefix = 'ant'

export function resolveCompName (name: string) {
  if (!prefix.comp) return name
  return prefix.comp + '-' + name
}

export function resolveClassName (name: string) {
  if (!prefix.css) return name
  return prefix.css + '-' + name
}

