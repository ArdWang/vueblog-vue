import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 布局代码
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

// 网络请求
import axios from 'axios'

import "./axios"

Vue.use(Element);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


