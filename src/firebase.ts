// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoBw-bwLA_EsriL2mMhLgPCnq7EZrgqvc",
  authDomain: "lifemanager-493a3.firebaseapp.com",
  projectId: "lifemanager-493a3",
  storageBucket: "lifemanager-493a3.firebasestorage.app",
  messagingSenderId: "616563907287",
  appId: "1:616563907287:web:66421768987d8779dfee92",
  measurementId: "G-QZRZJV0CG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
