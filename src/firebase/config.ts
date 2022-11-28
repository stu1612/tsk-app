import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgt3R6E9qEaEDOZR0AGveHMfD9yJ7jYcM",
  authDomain: "tsk-app-1.firebaseapp.com",
  projectId: "tsk-app-1",
  storageBucket: "tsk-app-1.appspot.com",
  messagingSenderId: "674733236283",
  appId: "1:674733236283:web:f7e47565a54872e5353c1e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
