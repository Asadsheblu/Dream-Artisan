// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6y2YKcch0mLYOS-mBBnyMrcOwBMk0oxE",
  authDomain: "dream-artisan.firebaseapp.com",
  projectId: "dream-artisan",
  storageBucket: "dream-artisan.appspot.com",
  messagingSenderId: "532602574148",
  appId: "1:532602574148:web:fd4ba5dc86f48e8f0db311"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth