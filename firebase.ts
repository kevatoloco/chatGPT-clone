import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const alreadyCreatedAps = getApps();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSxPVCXyGUZaErdk4d_nJE7WdFqRfJ0j0",
  authDomain: "chatgpt-clone-7e5a0.firebaseapp.com",
  projectId: "chatgpt-clone-7e5a0",
  storageBucket: "chatgpt-clone-7e5a0.appspot.com",
  messagingSenderId: "426721217009",
  appId: "1:426721217009:web:b3e3efa850ac0c00879c50",
};

// Initialize Firebase
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const app =
  alreadyCreatedAps.length === 0
    ? initializeApp(firebaseConfig, "ChatGPT")
    : alreadyCreatedAps[0];

const db = getFirestore(app);

export { db };
