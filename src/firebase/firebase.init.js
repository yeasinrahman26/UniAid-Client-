// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCogA8oU6CgT3uwyq-rx4tkYg5MF1-tVYM",
  authDomain: "uni-aid.firebaseapp.com",
  projectId: "uni-aid",
  storageBucket: "uni-aid.firebasestorage.app",
  messagingSenderId: "243281589513",
  appId: "1:243281589513:web:d594cecf622fe00af68fd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
