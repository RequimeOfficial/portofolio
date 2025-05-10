import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyXrYpSH4w-yLgC8kOZCXOpWuCGYHs7yc",
  authDomain: "portofolio-9ca0b.firebaseapp.com",
  databaseURL: "https://portofolio-web-3e8e8-default-rtdb.firebaseio.com",
  projectId: "portofolio-9ca0b",
  storageBucket: "portofolio-9ca0b.firebasestorage.app",
  messagingSenderId: "521125653402",
  appId: "1:521125653402:web:1c2712cb206ed4806e2823"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
