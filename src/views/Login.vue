<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-header">
        <img src="/Navbar/logo.png" alt="Logo Toko Pancing Ku" class="logo">
        <h1>Selamat Datang</h1>
        <p>Masuk ke akun Toko Pancing Ku Anda</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="username">
            <i class="fas fa-user"></i>
            <span>Username</span>
          </label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            placeholder="Masukkan username Anda"
            required
          >
        </div>
        
        <div class="input-group">
          <label for="password">
            <i class="fas fa-lock"></i>
            <span>Password</span>
          </label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Masukkan password Anda"
            required
          >
        </div>
        
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe">
            Ingat Saya
          </label>
          <router-link to="/lupa-password" class="forgot-password">Lupa Password?</router-link>
        </div>
        
        <button type="submit" class="login-btn">
          <i class="fas fa-sign-in-alt"></i>
          <span>MASUK</span>
        </button>
        
        <div class="register-link">
          Belum punya akun? <router-link to="/daftar">Daftar Sekarang</router-link>
        </div>
      </form>
    </div>
    
    <div class="login-bg">
      <img src="/Navbar/logo.png" alt="Background Memancing">
      <div class="bg-overlay"></div>
      <div class="bg-quote">
        <p>"Petualangan memancing terbaik dimulai dari sini"</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    handleLogin() {
      if (this.username === 'admin' && this.password === '1234') {
        this.$router.push('/');
      } else {
        alert('Username atau password salah');
      }
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.login-container {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f7fa;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  width: 100px;
  margin-bottom: 1rem;
}

.login-header h1 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.login-header p {
  color: #7f8c8d;
  font-size: 1rem;
}

/* Form Styles */
.login-form {
  width: 100%;
  max-width: 400px;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

.input-group label i {
  margin-right: 10px;
  color: #3498db;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: #fff;
}

.input-group input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  outline: none;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

.remember-me {
  display: flex;
  align-items: center;
  color: #7f8c8d;
  cursor: pointer;
}

.remember-me input {
  margin-right: 5px;
}

.forgot-password {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

.forgot-password:hover {
  color: #2980b9;
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.login-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-btn:active {
  transform: translateY(0);
}

.register-link {
  margin-top: 1.5rem;
  text-align: center;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.register-link a {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}

/* Background Section */
.login-bg {
  flex: 1;
  position: relative;
  display: none;
}

.login-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.8), rgba(44, 62, 80, 0.8));
}

.bg-quote {
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: white;
  max-width: 400px;
}

.bg-quote p {
  font-size: 1.5rem;
  line-height: 1.4;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Responsive Design */
@media (min-width: 992px) {
  .login-bg {
    display: block;
  }
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.login-wrapper {
  animation: fadeIn 0.5s ease-out;
}
</style>