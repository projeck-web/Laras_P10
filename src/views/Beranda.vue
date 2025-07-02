<template>
  <div>
    <!-- Hero Section dengan Background Image -->
    <div class="hero">
      <div class="hero-content">
        <h1>Toko Pancing Ku</h1>
        <p>"Petualangan memancing dimulai di sini. Peralatan pancing berkualitas tinggi untuk setiap perjalanan."</p>
        <p class="tagline">"Hilangkan Stres Dengan Alat Pancing Baru"</p>
      </div>
    </div>

    <!-- Section Testimoni -->
    <div class="testimonial-section">
      <h2 class="testimonial-title">Apa Kata Pelanggan Kami?</h2>
      <div class="testimonial-container">
        <!-- Testimoni 1 -->
        <div class="testimonial-card">
          <div class="testimonial-profile">
            <img src="/Beranda/5.jpg" alt="Juliat A" class="profile-image">
            <div class="profile-info">
              <p class="testimonial-author">Juliat A</p>
              <p class="profile-role">Pemancing Senior</p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">"Saya sangat puas dengan pelayanan Toko Pancing Ku. Kualitas barangnya bagus, ada potongan harga dan aman, pengiriman cepat sampai dan paketnya sangat rapi."</p>
          </div>
        </div>

        <!-- Testimoni 2 -->
        <div class="testimonial-card">
          <div class="testimonial-profile">
            <img src="/Beranda/4.jpg" alt="Budi" class="profile-image">
            <div class="profile-info">
              <p class="testimonial-author">Budi Santoso</p>
              <p class="profile-role">Pemancing Handal</p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">"Toko Pancing Ku selalu menjadi pilihan utama saya. Produknya original dan harga bersaing. Pelayanannya ramah dan pengiriman super cepat!"</p>
          </div>
        </div>

        <!-- Testimoni 3 -->
        <div class="testimonial-card">
          <div class="testimonial-profile">
            <img src="/Beranda/1.jpg" alt="Putra" class="profile-image">
            <div class="profile-info">
              <p class="testimonial-author">Putra Susanto</p>
              <p class="profile-role">Pemancing Pemula</p>
            </div>
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">"Sebagai pemula, saya sangat terbantu dengan saran dari staf Toko Pancing Ku. Mereka membantu memilih peralatan yang sesuai dengan kebutuhan dan budget saya."</p>
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

<script>
import '../style/Beranda.css';
export default {
  name: 'Beranda'
  
}
</script>

