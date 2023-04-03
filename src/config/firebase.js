import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAAFs-CusMh3qt90uVT2pwCzKpkbLmcPfM",
  authDomain: "jornada-tiktok.firebaseapp.com",
  projectId: "jornada-tiktok",
  storageBucket: "jornada-tiktok.appspot.com",
  messagingSenderId: "704475499715",
  appId: "1:704475499715:web:27b48ebd7d3ecf5e5ce676",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
