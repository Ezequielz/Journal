// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfoJMul4VnL7JhYgOJGMfhM4P566Ywzmk",
  authDomain: "react-cursos-35c2b.firebaseapp.com",
  projectId: "react-cursos-35c2b",
  storageBucket: "react-cursos-35c2b.appspot.com",
  messagingSenderId: "436828337246",
  appId: "1:436828337246:web:a58dceef22371053c5f0cf"
};

// Initialize Firebase
export const firebaseApp = initializeApp( firebaseConfig );
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDB = getAuth( firebaseApp );
