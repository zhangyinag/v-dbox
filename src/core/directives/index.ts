import {Vue} from 'vue/types/vue'
import sticky from './sticky'
function install (vue: typeof Vue) {
  vue.directive('sticky', sticky)
}

export default install
