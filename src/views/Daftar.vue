<template>
  <div class="register-container">
    <div class="register-wrapper">
      <h1>Buat Akun Baru</h1>
      <form @submit.prevent="handleRegister" class="register-form">
        <div class="input-group">
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username" placeholder="Masukkan username" required />
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Masukkan email" required />
        </div>

        <div class="input-group">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Buat password" required />
        </div>

        <div class="input-group">
          <label for="confirmPassword">Konfirmasi Password</label>
          <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="Ulangi password" required />
        </div>

        <button type="submit" class="register-btn">Daftar</button>

        <p class="login-link">
          Sudah punya akun? <router-link to="/login">Masuk di sini</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import '../style/Daftar.css' 


const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

//Pemanggilan API
const isDev = import.meta.env.DEV
const API_USERS_URL = isDev
  ? 'http://localhost:3000/users'
  : 'https://da3b57c2-b900-41c7-b83d-7e0561d1279e-00-3aebdnsqmdyxs.pike.replit.dev/users'

const handleRegister = async () => {

  if (!username.value || !email.value || !password.value || !confirmPassword.value) {
    alert('❗ Semua field harus diisi!')
    return
  }

  if (!email.value.includes('@')) {
    alert('❗ Format email tidak valid.')
    return
  }

  if (password.value.length < 4) {
    alert('❗ Password minimal 4 karakter.')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('❌ Password tidak cocok!')
    return
  }

  try {

    const checkRes = await axios.get(`${API_USERS_URL}?username=${username.value}`)
    
    if (checkRes.data.length > 0) {
      alert('❌ Username sudah terdaftar! Gunakan username lain.')
      return
    }

    
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    await axios.post(API_USERS_URL, newUser)

    alert('✅ Pendaftaran berhasil! Silakan login.')

    
    username.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''

    router.push('/login')

  } catch (error) {
    console.error('❌ Gagal mendaftar:', error)
    alert('Terjadi kesalahan saat mendaftar.')
  }
}
</script>

