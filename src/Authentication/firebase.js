
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-clone-9aed1.firebaseapp.com",
  projectId: "netflix-clone-9aed1",
  storageBucket: "netflix-clone-9aed1.firebasestorage.app",
  messagingSenderId: "463810660183",
  appId: "1:463810660183:web:f27a69db1899b02af8e012"
};

 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

