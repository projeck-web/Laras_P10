// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// *** KONFIGURASI ASLI DARI FIREBASE CONSOLE ANDA (image_4b0964.jpg) ***
const firebaseConfig = {
  apiKey: "AIzaSyDyL... (YOUR ACTUAL API KEY HERE) ...", // Ganti dengan kunci asli Anda
  authDomain: "toko-pancing-ku.firebaseapp.com", // Ganti dengan domain asli Anda
  projectId: "toko-pancing-ku", // Ganti dengan ID proyek asli Anda
  storageBucket: "toko-pancing-ku.appspot.com", // Ganti
  messagingSenderId: "...", // Ganti
  appId: "...", // Ganti
  measurementId: "G-..." // Ganti
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };