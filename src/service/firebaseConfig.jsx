// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSDkCLoOJT5TZ1ISrzA_SkmbEDComT9vk",
  authDomain: "ai-trip-950b8.firebaseapp.com",
  projectId: "ai-trip-950b8",
  storageBucket: "ai-trip-950b8.appspot.com",
  messagingSenderId: "228964888184",
  appId: "1:228964888184:web:03e20263197f837c56c78d",
  measurementId: "G-VJ65TZ7HEN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);