import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Secret from './views/Secret.vue'
import NBA from './views/NBA.vue'
import NFL from './views/NFL.vue'
import MLB from './views/MLB.vue'
import About from './views/About.vue'
import FAQ from './views/FAQ.vue'
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
  {path: '/FAQ', component: FAQ},
  {path: '/About', component: About},
  {path: '/NBA', component: NBA},
  {path: '/NBA', component: NBA},
  {path: '/NFL', component: NFL},
  {path: '/MLB', component: MLB},
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})