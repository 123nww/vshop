import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import i18n from "./i18n/index";
import VueI18n from "vue-i18n";
import LangENUS from './i18n/en'
import LangZHCN from './i18n/zh'

import './icons' // icon
//解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

// 多语言
Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.use(VueLazyLoad,{
  loading:require('@/assets/img/common/placeholder.png')
});

// 全局引入rem
import '@/config/rem'
import '@/plugins/vant.js'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')


