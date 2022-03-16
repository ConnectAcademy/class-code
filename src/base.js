// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtYuh_JdQygKaeJtnALag-gYL7NtDVFc0",
  authDomain: "react-auth-system-36b5c.firebaseapp.com",
  projectId: "react-auth-system-36b5c",
  storageBucket: "react-auth-system-36b5c.appspot.com",
  messagingSenderId: "850269313217",
  appId: "1:850269313217:web:87a3226d88e2a07e27dc40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
