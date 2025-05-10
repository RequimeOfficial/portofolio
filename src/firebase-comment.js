import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyXrYpSH4w-yLgC8kOZCXOpWuCGYHs7yc",
  authDomain: "portofolio-9ca0b.firebaseapp.com",
  projectId: "portofolio-9ca0b",
  storageBucket: "portofolio-9ca0b.firebasestorage.app",
  messagingSenderId: "521125653402",
  appId: "1:521125653402:web:1c2712cb206ed4806e2823",
  measurementId: "G-37ZKMQHHPW"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
