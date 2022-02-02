import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg5hCmOcDLi2SU-O_C1T4RU66mxWAVsCs",
  authDomain: "learning-firebase-2754c.firebaseapp.com",
  projectId: "learning-firebase-2754c",
  storageBucket: "learning-firebase-2754c.appspot.com",
  messagingSenderId: "629348239849",
  appId: "1:629348239849:web:579fab9f6103cdbcf36378",
  measurementId: "G-MC14PSL6T3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
