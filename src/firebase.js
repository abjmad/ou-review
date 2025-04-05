// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Ysdz76-JpFZ3ILL2lIBUHdEZPO5KaFE",
  authDomain: "ou-review.firebaseapp.com",
  databaseURL: "https://ou-review-default-rtdb.firebaseio.com",
  projectId: "ou-review",
  storageBucket: "ou-review.firebasestorage.app",
  messagingSenderId: "287546176070",
  appId: "1:287546176070:web:0e2f312b39f0c4a8b51047",
  measurementId: "G-MZ253RPP8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);