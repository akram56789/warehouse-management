// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWl_vcWNORNj0t43zWJOdYESotnOrvqdM",
  authDomain: "assignment-11-12f22.firebaseapp.com",
  projectId: "assignment-11-12f22",
  storageBucket: "assignment-11-12f22.appspot.com",
  messagingSenderId: "217910549155",
  appId: "1:217910549155:web:475598bc2a8713e9937d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;