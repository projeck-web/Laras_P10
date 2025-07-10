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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import '../style/Daftar.css';

// UBAH BARIS INI
// import { db } from '@/firebase.js';
import { db } from '../firebase.js';
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

// Hapus isDev dan API_USERS_URL karena tidak lagi diperlukan
// const isDev = import.meta.env.DEV
// const API_USERS_URL = isDev
//   ? 'http://localhost:3000/users'
//   : 'https://da3b57c2-b900-41c7-b83d-7e0561d1279e-00-3aebdnsqmdyxs.pike.replit.dev/users'

const handleRegister = async () => {
  if (!username.value || !email.value || !password.value || !confirmPassword.value) {
    alert('❗ Semua field harus diisi!');
    return;
  }

  if (!email.value.includes('@')) {
    alert('❗ Format email tidak valid.');
    return;
  }

  if (password.value.length < 4) {
    alert('❗ Password minimal 4 karakter.');
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert('❌ Password tidak cocok!');
    return;
  }

  try {
    // 1. Cek apakah username sudah terdaftar di Firestore
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('username', '==', username.value));
    const checkUsernameSnapshot = await getDocs(q);

    if (!checkUsernameSnapshot.empty) {
      alert('❌ Username sudah terdaftar! Gunakan username lain.');
      return;
    }

    // 2. Jika username belum terdaftar, buat user baru di Firestore
    const newUser = {
      // Tidak perlu ID manual, Firestore akan otomatis membuat Document ID
      username: username.value,
      email: email.value,
      password: password.value // Peringatan: Menyimpan password plaintext TIDAK AMAN!
    };

    // Tambahkan dokumen baru ke koleksi 'users'. Firestore akan otomatis membuat Document ID.
    // Atau, jika Anda ingin ID spesifik (misal, berdasarkan email hashed), Anda bisa pakai:
    // await setDoc(doc(usersRef, email.value), newUser); // ID dokumen akan jadi email
    await setDoc(doc(usersRef), newUser); // Firestore otomatis membuat Document ID unik

    alert('✅ Pendaftaran berhasil! Silakan login.');

    // Reset form
    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';

    router.push('/login');

  } catch (error) {
    console.error('❌ Gagal mendaftar dengan Firebase:', error);
    alert('Terjadi kesalahan saat mendaftar: ' + error.message);
  }
};
</script>

