// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFkYY2_Lt0a0GpUIBAgPp-INB5MD0F_ec",
  authDomain: "book-management-1a067.firebaseapp.com",
  projectId: "book-management-1a067",
  storageBucket: "book-management-1a067.firebasestorage.app",
  messagingSenderId: "26186772425",
  appId: "1:26186772425:web:096556b405ea7af7554218",
  measurementId: "G-GH5SNZNEX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)