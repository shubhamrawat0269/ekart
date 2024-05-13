import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBHTUtOeuCON7AEF3UPPxU1sHsnFfBv-M",
  authDomain: "ecommerce-for.firebaseapp.com",
  projectId: "ecommerce-for",
  storageBucket: "ecommerce-for.appspot.com",
  messagingSenderId: "609664686595",
  appId: "1:609664686595:web:302bf25cc8efa64a4e4c36",
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
