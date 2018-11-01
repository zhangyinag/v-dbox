import Vue from 'vue'
import App from './App.vue'
import '../styles/index.scss'

import 'highlight.js/styles/darcula.css'

import dbox from '@/components/index'
import ComponentExample from './ComponentExample.vue'
import ComponentView from './ComponentView.vue'
import ApiTable from './ApiTable.vue'

Vue.config.productionTip = false

Vue.use(dbox, {})

Vue.component('component-example', ComponentExample)
Vue.component('component-view', ComponentView)
Vue.component('api-table', ApiTable)

new Vue({
  render: h => h(App)
}).$mount('#app')
