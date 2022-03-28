import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxMbjd1h9Ej-xFJIrAt3Dk4jhXqvyJ24I",
  authDomain: "next-firebase-chukwudi.firebaseapp.com",
  projectId: "next-firebase-chukwudi",
  storageBucket: "next-firebase-chukwudi.appspot.com",
  messagingSenderId: "1090225463497",
  appId: "1:1090225463497:web:39587bbe70592a170cad18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};
