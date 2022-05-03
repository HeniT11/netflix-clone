// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX3vzW6X6niLFv5uryFn_qtVcK-h4UVd4",
  authDomain: "netflix-clone-henok-tesfahun.firebaseapp.com",
  projectId: "netflix-clone-henok-tesfahun",
  storageBucket: "netflix-clone-henok-tesfahun.appspot.com",
  messagingSenderId: "57870390833",
  appId: "1:57870390833:web:c786cd92add1886103a710",
  measurementId: "G-JBQDN69ZSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);