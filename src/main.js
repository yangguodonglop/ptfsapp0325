import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

Vue.config.productionTip = false

import rem from './common/js/util'
Vue.use(rem)
import './common/css/reset.less'
//  import './assets/css/mui.less'
//  import mui from './assets/js/mui.js'
//  Vue.prototype.mui = mui
import store from './store/index'
import axios from 'axios'
Vue.prototype.$axios=axios
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import Bridge from './config/bridge.js'
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
