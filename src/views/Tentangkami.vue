<template>
  <div>
    <div class="about-page">

      <section class="about-hero">
        <div class="hero-overlay">
          <h1>Tentang Toko Pancing Ku</h1>
          <p>Perjalanan kami dalam menyediakan peralatan pancing terbaik sejak 2010</p>
        </div>
      </section>


      <section class="about-section history-section">
        <div class="container">
          <div class="section-header">
            <h2>Sejarah Kami</h2>
            <div class="divider"></div>
          </div>
          <div class="content-wrapper">
            <div class="history-image">
              <img src="/Tentangkami/4t.jpg" alt="Toko Pancing Ku di tahun 2010">
            </div>
            <div class="history-text">
              <p>Toko Pancing Ku didirikan pada tahun 2010 oleh Bapak Laras  , seorang pecinta memancing yang memiliki visi untuk menyediakan peralatan pancing berkualitas dengan harga terjangkau. Bermula dari sebuah kios kecil di Pasar Marpoyan, kini kami telah berkembang menjadi toko peralatan pancing terbesar di wilayah ini.</p>
              <p>Dengan pengalaman lebih dari 13 tahun, kami memahami betul kebutuhan para pemancing, baik pemula maupun profesional. Setiap produk yang kami jual telah melalui proses seleksi ketat untuk memastikan kualitas terbaik untuk pelanggan kami.</p>
            </div>
          </div>
        </div>
      </section>


      <section class="about-section vision-section">
        <div class="container">
          <div class="section-header">
            <h2>Visi & Misi</h2>
            <div class="divider"></div>
          </div>
          <div class="vision-mission-grid">
            <div class="vision-card">
              <div class="icon-box">
                <i class="fas fa-bullseye"></i>
              </div>
              <h3>Visi</h3>
              <p>Menjadi toko peralatan pancing terdepan yang menyediakan produk berkualitas tinggi dengan pelayanan terbaik bagi komunitas pemancing di Indonesia.</p>
            </div>
            <div class="mission-card">
              <div class="icon-box">
                <i class="fas fa-tasks"></i>
              </div>
              <h3>Misi</h3>
              <ul>
                <li>Menyediakan produk pancing original dengan kualitas terbaik</li>
                <li>Memberikan harga kompetitif dan terjangkau</li>
                <li>Memberikan edukasi dan pengetahuan tentang dunia memancing</li>
                <li>Membangun komunitas pemancing yang solid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section class="about-section team-section">
        <div class="container">
          <div class="section-header">
            <h2>Tim Kami</h2>
            <div class="divider"></div>
              <p>Berikut adalah tim profesional yang siap melayani kebutuhan pancing Anda</p>
            </div>
          <div class="team-grid">
            <div class="team-member">
              <img src="/Tentangkami/2t.jpg" alt="Budi Santoso">
              <h3>Jaki Santoso</h3>
              <p class="position">Sales Manager</p>
              <p class="bio">Ahli dalam merekomendasikan peralatan sesuai kebutuhan dan budget.</p>
            </div>
            <div class="team-member">
              <img src="/Tentangkami/1t.jpeg" alt="Budi Santoso">
              <h3>Laras</h3>
              <p class="position">Founder & CEO</p>
              <p class="bio">Pecinta memancing dengan pengalaman 20+ tahun, ahli dalam teknik casting.</p>
            </div>
            <div class="team-member">
              <img src="/Tentangkami/3t.jpg" alt="Siti Rahayu">
              <h3>Agus Suseno</h3>
              <p class="position">Customer Service</p>
              <p class="bio">Siap membantu Anda dengan ramah dan profesional.</p>
            </div>
          </div>
        </div>
      </section>
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
import '../style/TentangKami.css';
export default {
  name: 'Tentangkami',
  metaInfo() {
    return {
      title: 'Tentang Kami - Toko Pancing Ku',
      meta: [
        { name: 'description', content: 'Tentang Toko Pancing Ku - Toko peralatan pancing terpercaya sejak 2010. Temukan sejarah, visi misi, dan tim profesional kami.' }
      ]
    }
  }
}
</script>

