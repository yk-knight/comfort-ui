/**
 *  created by 2019-11-12
**/
import 'babel-polyfill';
import Router from 'vue-router';
import Vue from 'vue'
import App from './App'

Vue.use(Router);
Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/button',
      component: (resolve) => require(['./view/button.vue'], resolve)
    },
    {
      path: '/input',
      component: (resolve) => require(['./view/input.vue'], resolve)
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
