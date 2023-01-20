// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFtAHxVuAm3jGmunMYiSfoJ-XUwypLrk0",
  authDomain: "chrysus-e568c.firebaseapp.com",
  projectId: "chrysus-e568c",
  storageBucket: "chrysus-e568c.appspot.com",
  messagingSenderId: "538377857115",
  appId: "1:538377857115:web:d368945a2cf0142654f77e",
  measurementId: "G-344WWGM3HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

