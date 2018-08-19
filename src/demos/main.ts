import Vue from 'vue'
import App from './App.vue'
import '../styles/index.scss'

import dbox from '@/components/index'

Vue.config.productionTip = false

Vue.use(dbox, {})

new Vue({
  render: h => h(App)
}).$mount('#app')
