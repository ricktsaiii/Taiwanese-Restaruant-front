import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import './plugins/axios.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './views/section_3.css'
import './views/section_4.css'
import './views/section_6.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixin from './mixin.js'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

Vue.component('ImgInputer', ImgInputer)
Vue.use(VueSweetalert2)
Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
