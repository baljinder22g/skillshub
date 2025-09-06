import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAiwr16ONESvCiq88OCoKvtJ2wrVY71OYw",
  authDomain: "skillhub-58e7c.firebaseapp.com",
  databaseURL: "https://skillhub-58e7c-default-rtdb.firebaseio.com",
  projectId: "skillhub-58e7c",
  storageBucket: "skillhub-58e7c.firebasestorage.app",
  messagingSenderId: "851826398170",
  appId: "1:851826398170:web:3ea895e4037f85f50c66e3",
  measurementId: "G-GJR211RYCQ"
};
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)