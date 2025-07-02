<template>
  <nav class="navbar">
    <div class="brand-container">
      <img src="/Navbar/logo.png" alt="Logo Toko Pancing Ku" class="logo">
      <span class="shop-name">Toko Pancing Ku</span>
    </div>
    <ul class="menu-center">
      <li><router-link to="/">Beranda</router-link></li>
      <li><router-link to="/barang">Produk</router-link></li>
      <li><router-link to="/keranjang">Keranjang</router-link></li>
      <li><router-link to="/tentang-kami">Tentang Kami</router-link></li>

    </ul>
    <ul class="menu-right">
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
  
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #84422cb7;
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 10px;
}

.brand-container {
  display: flex;
  align-items: center;
  gap: 15px;
  position: absolute;
  left: 20px;
}

.logo {
  height: 50px;
  width: auto;
}

.shop-name {
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  font-size: 2.5ch;
}

.menu-center {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0 auto;
  padding: 0;
}

.menu-right {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 20px;
  display: flex;
}

li a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
  font-size: 2.1ch;
}

li a.router-link-active {
  text-decoration: underline;
}
</style>