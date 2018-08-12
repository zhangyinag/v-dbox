import {Vue} from 'vue/types/vue'
import {InstallationOptions} from '@/components/config'
import '@/styles/index.scss'

const insts: Array<(vue: typeof Vue, opt: any) => void> = []

const req = (require as any).context('', true, /index\.ts/)
const requireAll = (requireContext: any) => requireContext.keys().map((key: string) => {
  if (key.split('/').length !== 3) { return } //
  const inst = requireContext(key).default as any
  insts.push(inst)
})
requireAll(req)

export default function install (vue: typeof Vue, opt: InstallationOptions = {}): void {
  insts.forEach((inst) => inst(vue, opt))
}

declare const window: Window & { Vue: typeof Vue}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue, {})
}
