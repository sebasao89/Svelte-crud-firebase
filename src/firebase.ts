import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlRqfE6m7xMrwR96BmxvbW6MoZ18FmlSQ",
  authDomain: "svelte-crud-3b2ad.firebaseapp.com",
  projectId: "svelte-crud-3b2ad",
  storageBucket: "svelte-crud-3b2ad.appspot.com",
  messagingSenderId: "914920777566",
  appId: "1:914920777566:web:5ee17720f3db1f11dad1cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);