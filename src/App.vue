<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { useUserStore } from './store/Pinia'

const userStore = useUserStore()


const savedUser = JSON.parse(localStorage.getItem('user'))
if (savedUser) {
  userStore.login(savedUser.username, savedUser.password)
}


console.log('[Pinia Debug] Store status:')
console.log('isLoggedIn:', userStore.isLoggedIn)
console.log('username:', userStore.username)
console.log('password:', userStore.password)
</script>
