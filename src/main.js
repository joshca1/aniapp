import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import VueResource from 'vue-resource'
Vue.config.productionTip = false
import { Bar } from 'vue-chartjs'
import GameHeader from './components/GameComponents/GameHeader'
import Footer from './components/main/Footer'
import Header from './components/main/Header'
Vue.component('main-header', Header )
Vue.component('main-footer', Footer )
Vue.component('game-header', GameHeader)

Vue.component('line-chart', {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})


Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
