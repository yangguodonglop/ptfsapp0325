import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import './common/css/index_active.css'
import 'vant/lib/icon/local.css';

import rem from './common/js/util'
import './common/css/reset.less'
//  import './assets/css/mui.less'
//  import mui from './assets/js/mui.js'
//  Vue.prototype.mui = mui
import store from './store/index'
import axios from 'axios'
import echarts from 'echarts'
import Bridge from './config/bridge.js'
Vue.use(Vant)

Vue.config.productionTip = false
Vue.use(rem)
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$bridge = Bridge
// import { post, put, patch, Get } from './common/js/http';

// Vue.prototype.$post=post
// Vue.prototype.$get=Get
// Vue.prototype.$put=put
// Vue.prototype.$patch=patch

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
