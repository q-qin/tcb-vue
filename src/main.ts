import Vue from 'vue'
const Antd =require('ant-design-vue');
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import '@/styles/index.scss' // global css
import './permission'

Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
