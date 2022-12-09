// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsoIOxWb1AhYOQM3QEXPdZNpbLrUIDaSA",
  authDomain: "proyectoreact-49915.firebaseapp.com",
  projectId: "proyectoreact-49915",
  storageBucket: "proyectoreact-49915.appspot.com",
  messagingSenderId: "510941337865",
  appId: "1:510941337865:web:b78adc58ad847c5a14dbd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);
//1. Con esto se trae todos los productos del firebase
export default async function getItems() {
    //1.A
    const colectionProductsRef = collection(DB, "productos");

    const documents 
}