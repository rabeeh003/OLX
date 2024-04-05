import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBxl5XFLxj0f0W994Cx9Skk5wVp4ZXb8vE",
  authDomain: "olxproject-e37a9.firebaseapp.com",
  projectId: "olxproject-e37a9",
  storageBucket: "olxproject-e37a9.appspot.com",
  messagingSenderId: "2855846096",
  appId: "1:2855846096:web:cbd3e2bef9020902275ed5",
  measurementId: "G-XWKC6HCYFN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
  