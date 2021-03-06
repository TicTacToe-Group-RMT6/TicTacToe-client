import Vue from 'vue'
import VueRouter from 'vue-router'
import Rooms from '../views/Rooms.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routerGuard = (to, from, next) => {
  const isAuthenticated = store.state.room

  if (isAuthenticated !== '') {
    next()
  } else {
    next({ name: 'Rooms' })
  }
}

const routes = [
  {
    path: '/',
    name: 'Rooms',
    component: Rooms
  },
  {
    path: '/games',
    beforeEnter: routerGuard,
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
