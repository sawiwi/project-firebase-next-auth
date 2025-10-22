import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// conf env vars
const firebaseConfig = {
    apiKey : process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

}

// const firebaseConfig = {
//   apiKey: "AIzaSyB5Bv7d5q2bJjIpJeow-vyL9h4_XVBGIXE",
//   authDomain: "next-firebase-auth-3c12a.firebaseapp.com",
//   projectId: "next-firebase-auth-3c12a",
//   storageBucket: "next-firebase-auth-3c12a.firebasestorage.app",
//   messagingSenderId: "953791361377",
//   appId: "1:953791361377:web:6e09a6d1fbd54c4661d520"
// };



const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)