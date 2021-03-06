import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyD1SAgZfP_WheE5PE7C_LUZcvfxHDyK0ys",

  authDomain: "e-commerce-c0f5b.firebaseapp.com",

  projectId: "e-commerce-c0f5b",

  storageBucket: "e-commerce-c0f5b.appspot.com",

  messagingSenderId: "100550294431",

  appId: "1:100550294431:web:8f82a7804321a4d050dbaa"

};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const productosCollection = collection(db, "productos")
