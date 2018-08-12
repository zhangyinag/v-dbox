import Vue from 'vue'
import App from './App.vue'

import lang from '@/components/locale/lang/en_US'
import VDbox from '@/components/main'

Vue.config.productionTip = false

Vue.use(VDbox, {lang})

new Vue({
  render: h => h(App)
}).$mount('#app')
