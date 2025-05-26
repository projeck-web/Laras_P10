<template>
  <div>
    <div class="about-page">
    <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-overlay">
          <h1>Tentang Toko Pancing Ku</h1>
          <p>Perjalanan kami dalam menyediakan peralatan pancing terbaik sejak 2010</p>
        </div>
      </section>

    <!-- Sejarah Toko -->
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
              <p>Toko Pancing Ku didirikan pada tahun 2010 oleh Bapak Laras Mangkubuono  , seorang pecinta memancing yang memiliki visi untuk menyediakan peralatan pancing berkualitas dengan harga terjangkau. Bermula dari sebuah kios kecil di Pasar Marpoyan, kini kami telah berkembang menjadi toko peralatan pancing terbesar di wilayah ini.</p>
              <p>Dengan pengalaman lebih dari 13 tahun, kami memahami betul kebutuhan para pemancing, baik pemula maupun profesional. Setiap produk yang kami jual telah melalui proses seleksi ketat untuk memastikan kualitas terbaik untuk pelanggan kami.</p>
            </div>
          </div>
        </div>
      </section>

    <!-- Visi Misi -->
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

    <!-- Tim -->
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
              <h3>Laras Mangkubuono</h3>
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
        <p>&copy; 2023 Toko Pancing Ku. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
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
<style scoped>
.about-page {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.about-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/Tentangkami/5t.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
.hero-overlay h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.hero-overlay p {
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.about-section {
  padding: 80px 0;
}
.section-header {
  text-align: center;
  margin-bottom: 50px;
}
.section-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
}
.divider {
  width: 80px;
  height: 3px;
  background: #3498db;
  margin: 0 auto 20px;
}
.content-wrapper {
  display: flex;
  align-items: center;
  gap: 40px;
}
.history-image {
  flex: 1;
}
.history-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.history-text {
  flex: 1;
}
.history-text p {
  margin-bottom: 20px;
  font-size: 1.1rem;
}
.vision-mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.vision-card, .mission-card {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
}
.icon-box {
  background: #3498db;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
}
.vision-card h3, .mission-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.5rem;
}
.mission-card ul {
  padding-left: 20px;
}
.mission-card li {
  margin-bottom: 10px;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.team-member {
  text-align: center;
  background: #f9f9f9;
  padding: 30px 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.team-member:hover {
  transform: translateY(-5px);
}
.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #3498db;
}
.team-member h3 {
  margin-bottom: 5px;
  color: #2c3e50;
}
.position {
  color: #3498db;
  font-weight: bold;
  margin-bottom: 15px;
}
.bio {
  color: #7f8c8d;
}
@media (max-width: 992px) {
  .content-wrapper {
    flex-direction: column;
  }
  .vision-mission-grid {
    grid-template-columns: 1fr;
  }
  .testimonials {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .hero-overlay h1 {
    font-size: 2.5rem;
  }
  .hero-overlay p {
    font-size: 1.2rem;
  }
  .about-section {
    padding: 60px 0;
  }
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
.site-footer {
  background-color: #84422cb7;
  color: #ecf0f1;
  padding: 50px 0 0;
  margin-top: 50px;
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.footer-section {
  margin-bottom: 30px;
}
.footer-section h3 {
  color: #f1c40f;
  font-size: 1.4em;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}
.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: #f1c40f;
}
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}
.social-icons a {
  color: #ecf0f1;
  font-size: 1.5em;
  transition: color 0.3s;
}
.social-icons a:hover {
  color: #f1c40f;
}
.footer-links {
  list-style: none;
  padding: 0;
}
.footer-links li {
  margin-bottom: 10px;
}
.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}
.footer-links a:hover {
  color: #f1c40f;
}
.contact-info {
  list-style: none;
  padding: 0;
}
.contact-info li {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
}
.contact-info i {
  margin-right: 10px;
  color: #f1c40f;
  margin-top: 3px;
}
.footer-bottom {
  background-color: #2f1a1aa7;
  padding: 20px 0;
  text-align: center;
  margin-top: 30px;
}
.footer-bottom p {
  margin: 0;
  color: #bdc3c7;
  font-size: 0.9em;
}
@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
  .footer-section {
    text-align: center;
  }
  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  .social-icons {
    justify-content: center;
  }
}
</style>
