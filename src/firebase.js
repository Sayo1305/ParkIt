// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZE62vKwFSabd5NL0DBBtdWZjDF6GGirE",
  authDomain: "parkit-1e1b2.firebaseapp.com",
  databaseURL: "https://parkit-1e1b2-default-rtdb.firebaseio.com",
  projectId: "parkit-1e1b2",
  storageBucket: "parkit-1e1b2.appspot.com",
  messagingSenderId: "678603836970",
  appId: "1:678603836970:web:5300f437e9d792fb1e7d53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default {app};