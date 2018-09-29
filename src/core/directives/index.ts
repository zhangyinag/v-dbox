import {Vue} from 'vue/types/vue'
import ripple from './ripple'
function install (vue: typeof Vue) {
  vue.directive('ripple', ripple)
}

export default install