<template>
  <div>
      <div class="fishing-shop">
    <!-- Hero Banner -->
      <div class="hero-banner">
        <h1>TOKO PANCING KU</h1>
        <p>Peralatan Pancing Terlengkap dengan Harga Terbaik</p>
      </div>

    <!-- Produk Unggulan -->
      <div class="featured-section">
        <h2>PRODUK UNGGULAN KAMI</h2>
        <div class="featured-products">
          <div class="product-card featured">
          <img src="/Produk/6p.jpg" alt="Joran Premium">
            <div class="product-info">
              <h3>SATU SET REEL DAN JORAN SOUGAYILANG</h3>
              <p>Sougayilang Set Pancing Joran Pancing Set Alat Pancing Lengka Joran Pancing Spining Laut Kolam 1.8m Siap Pakai Bahan Karbon Fiber</p>
              <div class="price">Rp 500.000</div>
              <button class="btn-detail">LIHAT DETAIL</button>
            </div>
          </div>
        </div>
      </div>

    <!-- Daftar Produk -->
      <div class="products-section">
        <h2>PERALATAN PANCING KAMI</h2>
        <div class="product-grid">
        <!-- Product 1 -->
          <div class="product-card">
            <img src="/Produk/1p.jpg" alt="Joran Standar">
            <div class="product-info">
              <h3>CARBON TELESCOPIC</h3>
              <p>Set Telescopic Fishing Rod 5 Sections Carbon Fiber</p>
              <div class="price">Rp 99.999</div>
              <button class="btn-detail">LIHAT DETAIL</button>
            </div>
          </div>

        <!-- Product 2 -->
          <div class="product-card">
            <img src="/Produk/2p.jpg" alt="Reel Pancing">
            <div class="product-info">
              <h3>REEL ABU GARCIA 2000SH</h3>
              <p>Reel Abu Garcia Revo MGXTREME 2000SH 12BB Carbon Body Smooth</p>
              <div class="price">Rp 415.000</div>
              <button class="btn-detail">LIHAT DETAIL</button>
            </div>
          </div>

        <!-- Product 3 -->
          <div class="product-card">
            <img src="/Produk/4p.jpg" alt="Senar Pancing">
            <div class="product-info">
              <h3>SET REEL DAN JORAN</h3>
              <p>Satu set reel dan joran 1.8M~2.1M dan reel full metal Setelan warna ungu</p>
              <div class="price">Rp 259.000</div>
              <button class="btn-detail">LIHAT DETAIL</button>
            </div>
          </div>

        <!-- Product 4 -->
          <div class="product-card">
            <img src="/Produk/5p.jpg" alt="Umpan Buatan">
            <div class="product-info">
              <h3>SEASIR MERCURY PRO</h3>
              <p>Reel Pancing BaitCasting Fishing, Drag Clicker, 5+1 BB Ball Bearings</p>
              <div class="price">Rp 423.000</div>
              <button class="btn-detail">LIHAT DETAIL</button>
            </div>
         </div>
        </div>
      </div>

    <!-- Promo Section -->
      <div class="promo-section">
        <div class="promo-banner">
          <h2>PROMO SPESIAL!</h2>
          <p>Dapatkan diskon 20% untuk pembelian paket joran + reel</p>
          <button class="btn-promo">BELI SEKARANG</button>
        </div>
      </div>

    <!-- Testimoni -->
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
        <p>&copy; 2023 Toko Pancing Ku. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Barang'
}
</script>

<style scoped>
.fishing-shop {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Hero Banner */
.hero-banner {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Produk/3p.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 40px;
}

.hero-banner h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-banner p {
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Section Headers */
h2 {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 30px;
  position: relative;
}

h2::after {
  content: "";
  display: block;
  width: 100px;
  height: 3px;
  background: #3498db;
  margin: 10px auto;
}

/* Product Cards */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin: 10px 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.product-info p {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.price {
  font-weight: bold;
  color: #e74c3c;
  font-size: 1.3rem;
  margin: 15px 0;
}

.btn-detail {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-detail:hover {
  background-color: #2980b9;
}

/* Featured Product */
.featured-products {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.featured {
  max-width: 600px;
}

.featured img {
  height: 300px;
}

/* Promo Section */
.promo-section {
  margin: 50px 0;
}

.promo-banner {
  background-color: #e74c3c;
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
}

.promo-banner h2 {
  color: white;
  margin-bottom: 15px;
}

.promo-banner h2::after {
  background: white;
}

.promo-banner p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn-promo {
  background-color: white;
  color: #e74c3c;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-promo:hover {
  background-color: #f1c40f;
  color: #2c3e50;
}

/* Testimonial Section */
.testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.testimonial-card {
  background-color: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.testimonial-card p {
  font-style: italic;
  margin-bottom: 15px;
  color: #2c3e50;
}

.customer {
  font-weight: bold;
  color: #7f8c8d;
  text-align: right;
}

@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 2.5rem;
  }
  
  .hero-banner p {
    font-size: 1.2rem;
  }
  
  .product-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
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