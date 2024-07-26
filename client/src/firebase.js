// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "screen-blog-d1a57.firebaseapp.com",
  projectId: "screen-blog-d1a57",
  storageBucket: "screen-blog-d1a57.appspot.com",
  messagingSenderId: "763210883226",
  appId: "1:763210883226:web:f202762ab5a1fa37aa7f23",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
