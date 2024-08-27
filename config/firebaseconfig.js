// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env,
  authDomain: "testfirebase-95421.firebaseapp.com",
  projectId: "testfirebase-95421",
  storageBucket: "testfirebase-95421.appspot.com",
  messagingSenderId: "315328707532",
  appId: "1:315328707532:web:634c3f31337d2c9e75bb69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)