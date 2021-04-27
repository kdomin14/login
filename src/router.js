import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Secret from './views/Secret.vue'
import NBA from './views/NBA.vue'
import NFL from './views/NFL.vue'
import MLB from './views/MLB.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import NotFound from './views/NotFound.vue'

import { isAuthenticated } from './helpers/useAuth'

const routes = [
  { path: '/', component: Home },
  {
    path: '/secret',
    component: Secret,
    beforeEnter: (to, from) => {
      if (isAuthenticated.value) return true
      return '/login'
    },
  },
  {path: '/NBA', component: NBA},
  {path: '/NFL', component: NFL},
  {path: '/MLB', component: MLB},
  {path: '/cart', component: Cart},
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})