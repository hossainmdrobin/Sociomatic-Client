// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9L30x9qBhwCBLR7lbEDzXG3RNKD_aCp0",
  authDomain: "sociomatic-d8f10.firebaseapp.com",
  projectId: "sociomatic-d8f10",
  storageBucket: "sociomatic-d8f10.firebasestorage.app",
  messagingSenderId: "197903683526",
  appId: "1:197903683526:web:4030d70c8d2fd2ae82acc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export { app, auth };