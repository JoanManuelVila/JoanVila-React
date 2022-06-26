import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC3PF9-6Vsb9NmCjIbKPzRoaMPCc0e7KdI",
  authDomain: "antojate-d7db1.firebaseapp.com",
  projectId: "antojate-d7db1",
  storageBucket: "antojate-d7db1.appspot.com",
  messagingSenderId: "642456220334",
  appId: "1:642456220334:web:d991a8186e471f7799733f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
