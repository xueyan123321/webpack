// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'
import VueAxios from 'vue-axios'
import iView from 'iview'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
axios.defaults.baseURL = '/api/data'
axios.interceptors.response.use((response) => {
  if (response.data.content.errorCode !== 200) {
    alert('提交错误')
  } else {
    return response.data.content
  }
}, (error) => {
  alert('网络错误')
  return (Promise.reject(error))
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
