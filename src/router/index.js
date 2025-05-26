import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../views/Beranda.vue'
import Barang from '../views/Barang.vue'
import TentangKami from '../views/Tentangkami.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/', name: 'Beranda', component: Beranda },
  { path: '/barang', name: 'Barang', component: Barang },
  { path: '/tentang-kami', name: 'TentangKami', component: TentangKami },
  { path: '/login', name: 'Login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
