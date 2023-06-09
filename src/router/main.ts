import {createRouter, createWebHashHistory} from 'vue-router'
import Index from '../pages/Index.vue'

const routes = [
    { path: '/', component: Index },
]


export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

