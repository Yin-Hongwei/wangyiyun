// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import MuseUI from 'muse-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/js/iconfont.js'
import '@/assets/css/static.css'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MintUI)
Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
