import {Vue} from 'vue-property-decorator'
import Button from './src/index.vue'
import ButtonGroup from './src/ButtonGroup.vue'
import {InstallationOptions, resolveCompName} from '@/components/config'

export {Button, ButtonGroup}

export default function install (vue: typeof Vue, opt: InstallationOptions = {}): void {
  vue.component(resolveCompName('button'), Button)
  vue.component(resolveCompName('button-group'), ButtonGroup)
}
