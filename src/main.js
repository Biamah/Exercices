import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home'
import Exercicio1 from './views/Exercicio1'

const routes = [
    { path: '/', component: Home },
    { path: '/exercicio-1', component: Exercicio1 }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')