<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-header">
        <img src="/Navbar/logo.png" alt="Logo Toko Pancing Ku" class="logo">
        <h1>Selamat Datang</h1>
        <p>Masuk ke akun Toko Pancing Ku</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="username">
            <i class="fas fa-user"></i>
            <span>Username</span>
          </label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            placeholder="Masukkan username Anda"
            required
          >
        </div>
        
        <div class="input-group">
          <label for="password">
            <i class="fas fa-lock"></i>
            <span>Password</span>
          </label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Masukkan password Anda"
            required
          >
        </div>
        
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe">
            Ingat Saya
          </label>
          <router-link to="/lupa-password" class="forgot-password">Lupa Password?</router-link>
        </div>
        
        <button type="submit" class="login-btn">
          <i class="fas fa-sign-in-alt"></i>
          <span>MASUK</span>
        </button>
        
        <div class="register-link">
          Belum punya akun? <router-link to="/daftar">Daftar Sekarang</router-link>
        </div>
      </form>
    </div>
    
    <div class="login-bg">
      <img src="/Navbar/logo.png" alt="Background Memancing">
      <div class="bg-overlay"></div>
      <div class="bg-quote">
        <p>"Petualangan memancing terbaik dimulai dari sini"</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/Pinia'
import '../style/Login.css';

const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password = ref('')
const rememberMe = ref(false)


const isDev = import.meta.env.DEV;

// Pemanggilan API
const API_USERS_URL = isDev
  ? 'http://localhost:3000/users' 
  : 'https://da3b57c2-b900-41c7-b83d-7e0561d1279e-00-3aebdnsqmdyxs.pike.replit.dev/users';

const handleLogin = async () => {
  if (!username.value || !password.value) {
    alert('Username dan password tidak boleh kosong')
    return
  }

  try {
    const loginUrl = `${API_USERS_URL}?username=${username.value}&password=${password.value}`;


    const res = await fetch(loginUrl)
    

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Gagal mengambil data dari server: ${res.status} ${res.statusText} - ${errorText}`);
    }

    const data = await res.json()

    if (data.length > 0) {
      // pemanggilan action login dari Pinia
      userStore.login(data[0].username, data[0].password)
      if (userStore.isLoggedIn) {
        console.log('✅ Login berhasil dengan JSON Server')
        console.log('✅ Pinia berhasil menyimpan status login')
        console.log('👤 Username:', userStore.username)
        console.log('📦 State lengkap:', userStore.$state)
      } else {
        console.warn('⚠️ Login ke Pinia gagal — isLoggedIn masih false')
      }


      if (rememberMe.value) {

        localStorage.setItem('user', JSON.stringify({
          username: data[0].username,

        }))
      }

      router.push('/')
    } else {
      alert('Username atau password salah')
      console.log('❌ Login gagal: Tidak ditemukan di JSON Server')
    }
  } catch (error) {
    console.error('❌ Error saat login:', error)
    alert('Terjadi kesalahan saat menghubungi server: ' + error.message)
  }
}
</script>
