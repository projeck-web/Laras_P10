<template>
  <div class="shopping-cart-wrapper">
    <aside class="sidebar">
    </aside>

    <div class="shopping-cart-container">
      <div v-if="loading" class="loading-message">Memuat keranjang belanja...</div>
      <div v-else-if="error" class="error-message">Terjadi kesalahan: {{ error.message }}</div>
      <div v-else-if="cartItems.length === 0" class="empty-cart-message">Keranjang Anda kosong. <router-link to="/">Mulai Belanja</router-link></div>
      <div v-else class="cart-items-list">
        <div class="cart-item-card" v-for="item in cartItems" :key="item.id">
          <div class="item-thumbnail-placeholder">
            <img :src="item.image || '/images/default.jpg'" :alt="item.nama">
          </div>
          <div class="item-details-content">
            <h3>{{ item.nama }}</h3>
            <p class="item-description">{{ item.deskripsi }}</p>
            <div class="price-category-row">
              <span class="item-price">Rp {{ item.harga.toLocaleString('id-ID') }}</span>
              <span v-if="item.kategori" class="item-category">{{ item.kategori }}</span>
            </div>
          </div>
          
          <div class="item-controls-group">
            <div class="quantity-control-compact">
              <button @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity <= 1" class="btn-qty-compact btn-minus-compact">
                <i class="fas fa-minus"></i>
              </button>
              <span class="quantity-display-compact">{{ item.quantity }}</span>
              <button @click="updateQuantity(item.id, item.quantity + 1)" class="btn-qty-compact btn-plus-compact">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="subtotal-amount">
              Subtotal:
              <span>Rp {{ (item.harga * item.quantity).toLocaleString('id-ID') }}</span>
            </div>
            <button @click="deleteItem(item.id)" class="btn-hapus-compact">
              <i class="fas fa-trash-alt"></i> Hapus
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
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

  // --- HAPUS ATAU KOMENTARI BLOK INI ---
  // if (!isDev) {
  //   alert('❗ Edit keranjang hanya bisa dilakukan saat menjalankan server lokal.')
  //   return
  // }
  // ------------------------------------

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
  // --- HAPUS ATAU KOMENTARI BLOK INI ---
  // if (!isDev) {
  //   alert('❗ Penghapusan hanya tersedia saat menggunakan server lokal.')
  //   return
  // }
  // ------------------------------------

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
</script>
