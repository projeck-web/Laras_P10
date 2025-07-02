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
import '../style/Daftar.css';

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const handleRegister = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Password tidak cocok!')
    return
  }

  try {
    // 1. Cek apakah username sudah dipakai
    const checkRes = await axios.get(`http://localhost:3000/users?username=${username.value}`)
    
    if (checkRes.data.length > 0) {
      alert('Username sudah terdaftar! Gunakan username lain.')
      return
    }

    // 2. Tambahkan user baru ke json-server
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value
    }

    await axios.post('http://localhost:3000/users', newUser)

    alert('✅ Pendaftaran berhasil! Silakan login.')
    router.push('/login')

  } catch (error) {
    console.error('❌ Gagal mendaftar:', error)
    alert('Terjadi kesalahan saat mendaftar.')
  }
}
</script>
