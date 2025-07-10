<template>
  <div class="shopping-cart-wrapper">
    <aside class="sidebar">
    </aside>

    <div class="shopping-cart-container">
      <div v-if="loading" class="loading-message">Memuat keranjang belanja...</div>
      <div v-else-if="error" class="error-message">Terjadi kesalahan: {{ error.message }}</div>
      <div v-else-if="!cartItems || cartItems.length === 0" class="empty-cart-message">Keranjang Anda kosong. <router-link to="/">Mulai Belanja</router-link></div>
      <div v-else class="cart-items-list">
        <div class="cart-item-card" v-for="item in cartItems" :key="item.productId">
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
              <button @click="updateQuantity(item.productId, item.qty - 1)" :disabled="item.qty <= 1" class="btn-qty-compact btn-minus-compact">
                <i class="fas fa-minus"></i>
              </button>
              <span class="quantity-display-compact">{{ item.qty }}</span>
              <button @click="updateQuantity(item.productId, item.qty + 1)" class="btn-qty-compact btn-plus-compact">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="subtotal-amount">
              Subtotal:
              <span>Rp {{ (item.harga * item.qty).toLocaleString('id-ID') }}</span>
            </div>
            <button @click="deleteItem(item.productId)" class="btn-hapus-compact">
              <i class="fas fa-trash-alt"></i> Hapus
            </button>
          </div>
        </div>
      </div>

      <div v-if="cartItems.length > 0" class="cart-summary">
        <h2>Total Keranjang: Rp {{ totalCartPrice.toLocaleString('id-ID') }}</h2>
        <button class="btn-checkout">Checkout</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import '../style/Keranjang.css';

// PERBAIKAN PADA BARIS INI: Menggunakan jalur relatif
// Sebelumnya: import { db } from '@/firebase.js';
import { db } from '../firebase.js'; //

import { doc, getDoc, updateDoc } from 'firebase/firestore';

const cartItems = ref([]);
const loading = ref(true);
const error = ref(null);

// ID dokumen untuk keranjang. Harus konsisten dengan yang digunakan di Barang.vue.
const cartDocId = 'globalUserCart';


const totalCartPrice = computed(() =>
  // Menggunakan 'item.qty' karena ini field yang disimpan di Firestore
  cartItems.value.reduce((sum, item) => sum + (item.harga * item.qty), 0)
);


const fetchCartItems = async () => {
  try {
    loading.value = true;
    const cartRef = doc(db, 'keranjang', cartDocId); // Referensi ke dokumen keranjang
    const cartSnap = await getDoc(cartRef); // Ambil snapshot dokumen keranjang

    if (cartSnap.exists()) {
      // Jika dokumen keranjang ada, ambil array 'items' nya
      const cartData = cartSnap.data();
      cartItems.value = cartData.items || []; // Jika 'items' kosong/null, jadikan array kosong
      console.log("Data keranjang berhasil diambil dari Firebase:", cartItems.value);
    } else {
      cartItems.value = []; // Keranjang kosong jika dokumen tidak ada
      console.log("Dokumen keranjang tidak ditemukan di Firebase.");
    }
  } catch (err) {
    console.error('❌ Gagal mengambil data keranjang dari Firebase:', err);
    error.value = err;
    alert(`Gagal mengambil data keranjang: ${err.message}`); // Tampilkan alert
  } finally {
    loading.value = false;
  }
};


const updateQuantity = async (productId, newQuantity) => {
  if (newQuantity < 1) return; // Tidak boleh kurang dari 1

  const itemIndex = cartItems.value.findIndex(item => item.productId === productId);
  if (itemIndex === -1) return; // Item tidak ditemukan di keranjang lokal

  // Buat salinan array items yang akan dimodifikasi
  const updatedItems = [...cartItems.value];
  updatedItems[itemIndex].qty = newQuantity; // Perbarui kuantitas di salinan (menggunakan 'qty')

  try {
    const cartRef = doc(db, 'keranjang', cartDocId);
    // Lakukan update dokumen di Firestore
    await updateDoc(cartRef, { items: updatedItems, lastUpdated: new Date() });

    // Jika update di Firestore berhasil, perbarui state lokal
    cartItems.value[itemIndex].qty = newQuantity;
    console.log(`✅ Kuantitas item ${productId} berhasil diupdate di Firebase.`);
  } catch (err) {
    console.error(`❌ Gagal mengupdate kuantitas item ${productId} di Firebase:`, err);
    alert(`Gagal mengupdate kuantitas: ${err.message}`);
  }
};


const deleteItem = async (productId) => {
  const confirmed = confirm('Apakah Anda yakin ingin menghapus item ini dari keranjang?');
  if (!confirmed) return;

  // Filter item yang akan dihapus dari array lokal
  const updatedItems = cartItems.value.filter(item => item.productId !== productId);

  try {
    const cartRef = doc(db, 'keranjang', cartDocId);
    // Lakukan update dokumen di Firestore dengan array yang sudah difilter
    await updateDoc(cartRef, { items: updatedItems, lastUpdated: new Date() });

    // Jika update di Firestore berhasil, perbarui state lokal
    cartItems.value = updatedItems;
    console.log(`✅ Item ${productId} berhasil dihapus dari Firebase.`);
  } catch (err) {
    console.error(`❌ Gagal menghapus item ${productId} dari Firebase:`, err);
    alert(`Gagal menghapus item: ${err.message}`);
  }
};


onMounted(fetchCartItems);
</script>
