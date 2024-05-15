import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-4m25a-6rlZt7OEVNECU3iACnKiyOHEQ",
  authDomain: "ekart-f667b.firebaseapp.com",
  projectId: "ekart-f667b",
  storageBucket: "ekart-f667b.appspot.com",
  messagingSenderId: "746765884798",
  appId: "1:746765884798:web:6d141de2920e9c6df8a72f",
  measurementId: "G-TC7ZJH3J6N",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
