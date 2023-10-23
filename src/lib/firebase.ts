// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvy6Sq1QfvJ9rVqJKe_Y-3PYAA8E0UuWM",
  authDomain: "svelte-first-88fcb.firebaseapp.com",
  projectId: "svelte-first-88fcb",
  storageBucket: "svelte-first-88fcb.appspot.com",
  messagingSenderId: "1001833581814",
  appId: "1:1001833581814:web:d235a513e619aeedfcf0d7",
  measurementId: "G-58RVSFB7RT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
