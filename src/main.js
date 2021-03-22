import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 布局代码
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

// 网络请求
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
