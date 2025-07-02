import { ref, onMounted } from 'vue'
import axios from 'axios'
import '../style/Barang.css'

const produkList = ref([])

// Gunakan server lokal saat development, server online saat production (read-only)
const isDev = import.meta.env.DEV

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

// Fungsi untuk menambahkan produk ke keranjang
const addToCart = async (product) => {
  if (!product || !product.id || !product.nama || !product.harga) {
    alert("Informasi produk tidak lengkap. Tidak dapat ditambahkan ke keranjang.")
    return
  }

  if (!isDev) {
    alert('❗ Mode online hanya mendukung tampilan (GET). Tambah keranjang hanya bisa dilakukan secara lokal.')
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