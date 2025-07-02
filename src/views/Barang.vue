<template>
  <div>
    <div class="fishing-shop">
      <div class="hero-banner">
        <h1>TOKO PANCING KU</h1>
        <p>Peralatan Pancing Terlengkap dengan Harga Terbaik</p>
      </div>

      <div class="featured-section">
        <h2>PRODUK UNGGULAN KAMI</h2>
        <div class="featured-products">
          <div class="product-card featured">
            <img src="/Produk/6p.jpg" alt="Joran Premium">
            <div class="product-info">
              <h3>SATU SET REEL DAN JORAN SOUGAYILANG</h3>
              <p>Sougayilang Set Pancing Joran Pancing Set Alat Pancing Lengka Joran Pancing Spining Laut Kolam 1.8m Siap Pakai Bahan Karbon Fiber</p>
              <div class="price">Rp 500.000</div>
              <button @click="addToCart({ id: '6', nama: 'SATU SET REEL DAN JORAN SOUGAYILANG', deskripsi: 'Sougayilang Set Pancing Joran Pancing Set Alat Pancing Lengka Joran Pancing Spining Laut Kolam 1.8m Siap Pakai Bahan Karbon Fiber', harga: 500000, stok: 10, image: '/Produk/6p.jpg', kategori: 'Pancing' })" class="btn-detail">MASUKKAN KERANJANG</button>
            </div>
          </div>
        </div>
      </div>

      <div class="products-section">
        <h2>PERALATAN PANCING KAMI</h2>
        <div class="product-grid">
          <div class="product-card" v-for="produk in produkList" :key="produk.id">
            <img :src="`/Produk/${produk.id}p.jpg`" :alt="produk.nama">
            <div class="product-info">
              <h3>{{ produk.nama }}</h3>
              <p>{{ produk.deskripsi }}</p>
              <div class="price">Rp {{ produk.harga.toLocaleString('id-ID') }}</div>
              <button @click="addToCart(produk)" class="btn-detail">MASUKKAN KERANJANG</button>
            </div>
          </div>
        </div>
      </div>

      <div class="promo-section">
        <div class="promo-banner">
          <h2>PROMO SPESIAL!</h2>
          <p>Dapatkan diskon 20% untuk pembelian paket joran + reel</p>
          <button class="btn-promo">BELI SEKARANG</button>
        </div>
      </div>

      <div class="testimonial-section">
        <h2>TESTIMONI PELANGGAN</h2>
        <div class="testimonials">
          <div class="testimonial-card">
            <p>"Jorannya sangat ringan tapi kuat, strike ikan besar tidak masalah!"</p>
            <div class="customer">- Budi, Angler</div>
          </div>
          <div class="testimonial-card">
            <p>"Pelayanan memuaskan, barang original dan harga bersaing."</p>
            <div class="customer">- Anton, Pemancing Pemula</div>
          </div>
        </div>
      </div>
    </div>
    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Toko Pancing Ku</h3>
          <p>"Petualangan memancing dimulai di sini. Peralatan pancing berkualitas tinggi untuk setiap perjalanan."</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-whatsapp"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Menu Cepat</h3>
          <ul class="footer-links">
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Produk</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Kontak</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Kontak Kami</h3>
          <ul class="contact-info">
            <li><i class="fas fa-map-marker-alt"></i> Jl. Karya Bersama No. 18, Marpoyan Damai</li>
            <li><i class="fas fa-phone"></i> (021) 773-521</li>
            <li><i class="fas fa-envelope"></i> info@tokopancingku.com</li>
            <li><i class="fas fa-clock"></i> Buka Setiap Hari: 08.00 - 21.00 WIB</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Toko Pancing Ku. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import '../style/Barang.css' 
const produkList = ref([])


const isDev = import.meta.env.DEV
// Pemanggilan API
const API_BARANG_URL = isDev
  ? 'http://localhost:3000/barang'
  : 'https://tourmaline-spangled-country.glitch.me/barang'

const API_KERANJANG_URL = isDev
  ? 'http://localhost:3000/keranjang'
  : 'https://tourmaline-spangled-country.glitch.me/keranjang'

onMounted(async () => {
  try {
    const res = await axios.get(API_BARANG_URL)
    produkList.value = res.data
  } catch (err) {
    console.error('Gagal memuat produk:', err)
    alert('❌ Gagal mengambil data produk.')
  }
})


const addToCart = async (product) => {
  if (!product || !product.id || !product.nama || !product.harga) {
    alert("Informasi produk tidak lengkap. Tidak dapat ditambahkan ke keranjang.")
    return
  }

  try {
    const existingCartItemRes = await axios.get(`${API_KERANJANG_URL}?productId=${product.id}`)
    const existingCartItem = existingCartItemRes.data[0]

    if (existingCartItem) {
      const updatedQuantity = existingCartItem.quantity + 1
      await axios.put(`${API_KERANJANG_URL}/${existingCartItem.id}`, {
        ...existingCartItem,
        quantity: updatedQuantity
      })
      alert(`✅ Kuantitas "${product.nama}" diperbarui menjadi ${updatedQuantity}!`)
    } else {
      const newCartItem = {
        productId: product.id,
        nama: product.nama,
        harga: product.harga,
        quantity: 1,
        deskripsi: product.deskripsi,
        kategori: product.kategori,
        image: product.image || `/images/${product.id}p.jpg`
      }
      await axios.post(API_KERANJANG_URL, newCartItem)
      alert(`✅ "${product.nama}" berhasil ditambahkan ke keranjang!`)
    }
  } catch (err) {
    console.error('❌ Gagal menambahkan/memperbarui produk:', err)
    alert(`Gagal menambahkan ke keranjang: ${err.message}`)
  }
}
</script>

