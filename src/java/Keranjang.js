import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import '../style/Keranjang.css'

// State
const cartItems = ref([])
const loading = ref(true)
const error = ref(null)

// Deteksi apakah sedang development (lokal)
const isDev = import.meta.env.DEV

// Endpoint JSON Server dinamis
const API_KERANJANG_URL = isDev
  ? 'http://localhost:3000/keranjang'
  : 'https://tourmaline-spangled-country.glitch.me/keranjang'


// Hitung total harga
const totalCartPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + (item.harga * item.quantity), 0)
)

// Ambil data keranjang
const fetchCartItems = async () => {
  try {
    loading.value = true
    const response = await axios.get(API_KERANJANG_URL)
    cartItems.value = response.data
  } catch (err) {
    console.error('❌ Gagal mengambil data keranjang:', err)
    error.value = err
  } finally {
    loading.value = false
  }
}

// Update kuantitas item
const updateQuantity = async (id, newQuantity) => {
  if (newQuantity < 1) return
  if (!isDev) {
    alert('❗ Edit keranjang hanya bisa dilakukan saat menjalankan server lokal.')
    return
  }

  const itemIndex = cartItems.value.findIndex(item => item.id === id)
  if (itemIndex === -1) return

  const updatedItem = { ...cartItems.value[itemIndex], quantity: newQuantity }

  try {
    await axios.put(`${API_KERANJANG_URL}/${id}`, updatedItem)
    cartItems.value[itemIndex].quantity = newQuantity
    console.log(`✅ Kuantitas item ${id} berhasil diupdate`)
  } catch (err) {
    console.error(`❌ Gagal mengupdate item ${id}:`, err)
    alert(`Gagal mengupdate kuantitas: ${err.message}`)
  }
}

// Hapus item dari keranjang
const deleteItem = async (id) => {
  if (!isDev) {
    alert('❗ Penghapusan hanya tersedia saat menggunakan server lokal.')
    return
  }

  const confirmed = confirm('Apakah Anda yakin ingin menghapus item ini dari keranjang?')
  if (!confirmed) return

  try {
    await axios.delete(`${API_KERANJANG_URL}/${id}`)
    cartItems.value = cartItems.value.filter(item => item.id !== id)
    console.log(`✅ Item ${id} berhasil dihapus`)
  } catch (err) {
    console.error(`❌ Gagal menghapus item ${id}:`, err)
    alert(`Gagal menghapus item: ${err.message}`)
  }
}

// Fetch data saat komponen dimount
onMounted(fetchCartItems)