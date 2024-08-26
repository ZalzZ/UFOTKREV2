// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDlYK6zEF1TXy1Cx8RsBRMaB59f13rahkA",
  authDomain: "ufotkretkj3bintek.firebaseapp.com",
  projectId: "ufotkretkj3bintek",
  storageBucket: "ufotkretkj3bintek.appspot.com",
  messagingSenderId: "694559777564",
  appId: "1:694559777564:web:d3ad175244620653cd50d9",
  measurementId: "G-78EKNTRJ2Q"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();