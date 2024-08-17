import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmgAKlfRMVQOESvhZmyhxMGjPv6ZGmUH8",
  authDomain: "veterinariaifpr.firebaseapp.com",
  projectId: "veterinariaifpr",
  storageBucket: "veterinariaifpr.appspot.com",
  messagingSenderId: "627217296481",
  appId: "1:627217296481:web:ef36c48f674810d0ee0e20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
