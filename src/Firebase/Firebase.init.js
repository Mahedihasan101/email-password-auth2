// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBRzI0sQ9evi6h5z9fVcD4vfi3-y_rve4",
  authDomain: "email-password-auth2-3c631.firebaseapp.com",
  projectId: "email-password-auth2-3c631",
  storageBucket: "email-password-auth2-3c631.firebasestorage.app",
  messagingSenderId: "415549155407",
  appId: "1:415549155407:web:b0537d5dad4a80d7e3623a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);