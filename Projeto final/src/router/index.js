import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Full.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home.Vue
      },
      {
        path: '/plantas',
        name: 'Plantas',
        component: () => import(/* webpackChunkName: "about" */ '../views/Plantas.vue')
      },
      {
      path: '/perfil',
        name: 'perfil',
        component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router