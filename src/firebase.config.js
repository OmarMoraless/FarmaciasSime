
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBdsHx1FUSg82yskE7qPqIYeR93CaF9buk",
  authDomain: "sime-d4f0e.firebaseapp.com",
  projectId: "sime-d4f0e",
  storageBucket: "sime-d4f0e.appspot.com",
  messagingSenderId: "138024633926",
  appId: "1:138024633926:web:e207c8ccc47cc7f92fec47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;