// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtAolOkg4LRU2pEqbyNmC84x6t6Bc2_Fc",
  authDomain: "electronic-warehouse-2a118.firebaseapp.com",
  projectId: "electronic-warehouse-2a118",
  storageBucket: "electronic-warehouse-2a118.appspot.com",
  messagingSenderId: "858215956161",
  appId: "1:858215956161:web:6fa0134fcc3f24322dde40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;