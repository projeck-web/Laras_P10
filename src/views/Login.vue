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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/Pinia';
import '../style/Login.css';

// UBAH BARIS INI
// import { db } from '@/firebase.js';
import { db } from '../firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

const router = useRouter();
const userStore = useUserStore();

const username = ref('');
const password = ref('');
const rememberMe = ref(false);


const handleLogin = async () => {
  if (!username.value || !password.value) {
    alert('Username dan password tidak boleh kosong');
    return;
  }

  try {
    // Bangun query untuk mencari user berdasarkan username dan password di Firestore
    const usersRef = collection(db, 'users');
    const q = query(
      usersRef,
      where('username', '==', username.value),
      where('password', '==', password.value) // SEKALI LAGI, INI TIDAK AMAN UNTUK PASSWORD
    );

    const querySnapshot = await getDocs(q); // Lakukan query ke Firestore

    if (!querySnapshot.empty) {
      // Jika ada dokumen yang cocok (user ditemukan)
      const userData = querySnapshot.docs[0].data(); // Ambil data user pertama yang cocok

      // pemanggilan action login dari Pinia
      userStore.login(userData.username, userData.password); // Gunakan data dari Firestore
      if (userStore.isLoggedIn) {
        console.log('✅ Login berhasil dengan Firebase Firestore');
        console.log('✅ Pinia berhasil menyimpan status login');
        console.log('👤 Username:', userStore.username);
        console.log('📦 State lengkap:', userStore.$state);
      } else {
        console.warn('⚠️ Login ke Pinia gagal — isLoggedIn masih false');
      }

      if (rememberMe.value) {
        localStorage.setItem('user', JSON.stringify({
          username: userData.username,
        }));
      }

      router.push('/');
    } else {
      // Jika tidak ada dokumen yang cocok
      alert('Username atau password salah');
      console.log('❌ Login gagal: Username atau password tidak ditemukan di Firestore');
    }
  } catch (error) {
    console.error('❌ Error saat login dengan Firebase:', error);
    alert('Terjadi kesalahan saat login: ' + error.message);
  }
};
</script>
