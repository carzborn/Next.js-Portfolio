// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSbdSmeJTYvU2Es69x9tPXtu-rICkVgc4",
  authDomain: "portfolio-b1298.firebaseapp.com",
  projectId: "portfolio-b1298",
  storageBucket: "portfolio-b1298.appspot.com",
  messagingSenderId: "876495524707",
  appId: "1:876495524707:web:9980bf2634fed09f21b956",
  measurementId: "G-8Z6ZM2RZEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);