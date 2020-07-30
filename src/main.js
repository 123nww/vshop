import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/vant.js'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// import FormMaking from 'form-making'
// import 'form-making/dist/FormMaking.css'


// Vue.use(ElementUI)

// Vue.use(FormMaking)
//解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body);
  }, false);
}

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

Vue.use(VueLazyLoad);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


