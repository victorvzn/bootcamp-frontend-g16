// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOBjCd4FvSC0JC0wCRDNNSXmnn3kR1PK4",
  authDomain: "react-hero-app-c0d1f.firebaseapp.com",
  projectId: "react-hero-app-c0d1f",
  storageBucket: "react-hero-app-c0d1f.appspot.com",
  messagingSenderId: "258670388229",
  appId: "1:258670388229:web:486cc0618899321382a86c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)