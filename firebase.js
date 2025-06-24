// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdWmOJlmAsQQwCk5eSpXX1kDtDT7OhFqA",
  authDomain: "fooddelivery-4a4e2.firebaseapp.com",
  projectId: "fooddelivery-4a4e2",
  storageBucket: "fooddelivery-4a4e2.firebasestorage.app",
  messagingSenderId: "36482461925",
  appId: "1:36482461925:web:a953cf24bc5056e07be40c",
  measurementId: "G-GS7ZLLJT7M"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
