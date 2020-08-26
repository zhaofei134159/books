// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'

// css 
import 'static/bootstrap/css/bootstrap.css'
import 'static/fonts/font-awesome/css/font-awesome.css'
import 'static/fonts/fontello/css/fontello.css'
import 'static/plugins/magnific-popup/magnific-popup.css'
import 'static/css/animations.css'
import 'static/plugins/owl-carousel/owl.carousel.css'
import 'static/css/style.css'
import 'static/css/css/skins/red.css'
import 'static/css/custom.css'


Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
