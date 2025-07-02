import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/Pinia'
import '../style/Login.css';

const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = async () => {
  if (!username.value || !password.value) {
    alert('Username dan password tidak boleh kosong')
    return
  }

  try {
    const res = await fetch(`: 'https://tourmaline-spangled-country.glitch.me/users='${username.value}&password=${password.value}`)
    const data = await res.json()

    if (data.length > 0) {
      // User ditemukan, simpan ke Pinia
      userStore.login(data[0].username, data[0].password)

      // ✅ Tampilkan log jika Pinia berhasil menyimpan state
      if (userStore.isLoggedIn) {
        console.log('✅ Login berhasil dengan JSON Server')
        console.log('✅ Pinia berhasil menyimpan status login')
        console.log('👤 Username:', userStore.username)
        console.log('📦 State lengkap:', userStore.$state)
      } else {
        console.warn('⚠️ Login ke Pinia gagal — isLoggedIn masih false')
      }

      // Simpan ke localStorage jika centang "Ingat Saya"
      if (rememberMe.value) {
        localStorage.setItem('user', JSON.stringify({
          username: data[0].username,
          password: data[0].password
        }))
      }

      router.push('/')
    } else {
      alert('Username atau password salah')
      console.log('❌ Login gagal: Tidak ditemukan di JSON Server')
    }
  } catch (error) {
    console.error('❌ Error saat login:', error)
    alert('Terjadi kesalahan saat menghubungi server')
  }
}