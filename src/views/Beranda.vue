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
        <p>&copy; 2023 Toko Pancing Ku. All Rights Reserved.</p>
      </div>
    </footer>
  </div>

</template>

<script>
export default {
  name: 'Beranda'
}
</script>

<style scoped>
/* Hero Section Styles */
.hero {
  background-image: url('/Beranda/3.jpg');
  background-size: cover;
  background-position: center;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 80px 20px;
  position: relative;
  margin-top: 20px;
  border-radius: 20px;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
}

.hero-content {
  position: relative;
  z-index: 10;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: bold;
}

p {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.tagline {
  font-style: italic;
  color: #ddd;
  margin-top: 20px;
}

/* Testimonial Section Styles */
.testimonial-section {
  padding: 60px 20px;
  background-color: #f8f9fa;
  text-align: center;
}

.testimonial-title {
  font-size: 2em;
  margin-bottom: 40px;
  color: #333;
}

.testimonial-container {
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.testimonial-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.testimonial-profile {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 3px solid #4CAF50;
}

.profile-info {
  text-align: left;
}

.testimonial-author {
  font-weight: bold;
  color: #333;
  font-size: 1.1em;
  margin: 0;
}

.profile-role {
  color: #777;
  font-size: 0.9em;
  margin: 5px 0 0 0;
}

.testimonial-content {
  padding-left: 75px;
}

.testimonial-text {
  font-size: 1.1em;
  line-height: 1.8;
  color: #555;
  font-style: italic;
  margin: 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 20px;
  }
  
  .testimonial-profile {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .profile-image {
    margin-right: 0;
    margin-bottom: 10px;
  }
  
  .testimonial-content {
    padding-left: 0;
    padding-top: 15px;
  }
}

@media (min-width: 992px) {
  .testimonial-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .testimonial-content {
    padding-left: 0;
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

/* Responsive Design */
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