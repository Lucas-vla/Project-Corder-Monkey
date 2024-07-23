// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0PRcikUHt6WI0krScnmWYnW-6kAjhEV8",
  authDomain: "coders-monkeys-df649.firebaseapp.com",
  projectId: "coders-monkeys-df649",
  storageBucket: "coders-monkeys-df649.appspot.com",
  messagingSenderId: "499434048495",
  appId: "1:499434048495:web:c9dd8cdb68047ba5f7c41a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
