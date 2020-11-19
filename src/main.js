import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
import store from './store'

Vue.use(VTooltip)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
