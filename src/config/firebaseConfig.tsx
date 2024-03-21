import { getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA54yVfqKGK63WoNkULXePUj2gZ10ic4tQ",
  authDomain: "scissor-72369.firebaseapp.com",
  projectId: "scissor-72369",
  storageBucket: "scissor-72369.appspot.com",
  messagingSenderId: "791809627600",
  appId: "1:791809627600:web:ef2aced8b045338b7855d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)



