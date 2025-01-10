// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxlsPKQ-f8uOaKEbhKnDHjyHLqhEbrkL0",
  authDomain: "eades-service.firebaseapp.com",
  projectId: "eades-service",
  storageBucket: "eades-service.appspot.com",
  messagingSenderId: "358323913866",
  appId: "1:358323913866:web:d4084f2a2725821d78d973",
  measurementId: "G-PQNHKBRX3C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()