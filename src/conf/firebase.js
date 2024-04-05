import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDQIn0N1taMMfpXwrMPU89DYQPgCqRSj14",
  authDomain: "olx-project-d3a21.firebaseapp.com",
  projectId: "olx-project-d3a21",
  storageBucket: "olx-project-d3a21.appspot.com",
  messagingSenderId: "679345149842",
  appId: "1:679345149842:web:11d86c5bbd904bdfa4d34b",
  measurementId: "G-KD1JK7FNVN"
};

const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
  