// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR_K_MMHKVw7zW5cRZrhpJnHZ6T__z0Vg",
  authDomain: "contact-quadropicdotcom.firebaseapp.com",
  projectId: "contact-quadropicdotcom",
  storageBucket: "contact-quadropicdotcom.firebasestorage.app",
  messagingSenderId: "777940702134",
  appId: "1:777940702134:web:62763eacb428882c242717"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };