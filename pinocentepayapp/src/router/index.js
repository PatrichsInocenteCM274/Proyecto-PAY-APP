import Vue from 'vue'
import VueRouter from 'vue-router'
import checkout from '../views/checkout.vue'
import confirm from '../views/confirmed.vue'
import canceled from '../views/canceled.vue'
import form from '../views/form.vue'
import report from '../views/report.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: checkout
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/form',
    name: 'form',
    component: form
  },
  {
    path: '/confirmed',
    name: 'confirmed',
    component: confirm,
    props: true
  },
  {
    path: '/canceled',
    name: 'canceled',
    component: canceled,
    props: true
  },
  {
    path: '/report',
    name: 'report',
    component: report,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
