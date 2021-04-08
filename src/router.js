import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Secret from './views/Secret.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

import {isAuthenticated} from './helpers/useFirebase'

const routes = [
    {path: '/', component: Home }, {path: '/secret', component: Secret, 
    beforeEnter: (to,from,next) => {
        console.log(isAuthenticated.value)
        if (isAuthenticated.value) return true 
        return '/login'
    }, 
    },

    {path: '/login', component: Login },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
