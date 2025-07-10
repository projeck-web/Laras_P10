import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../views/Beranda.vue'
import Barang from '../views/Barang.vue'
import TentangKami from '../views/Tentangkami.vue'
import Login from '../views/Login.vue'
import Daftar from '../views/Daftar.vue'
import Keranjang from '../views/Keranjang.vue'

const routes = [
  { path: '/', name: 'Beranda', component: Beranda },
  { path: '/barang', name: 'Barang', component: Barang },
  { path: '/tentang-kami', name: 'TentangKami', component: TentangKami },
  { path: '/login', name: 'Login', component: Login },
  { path: '/daftar', name: 'Daftar', component: Daftar },
  { path: '/Keranjang', name: 'Keranjang', component: Keranjang }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
