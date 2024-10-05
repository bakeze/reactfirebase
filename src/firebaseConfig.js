// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmpiQ5_v-Ld3y8r6CJ6Udvwz1W7tM2UAw",
  authDomain: "test-c617c.firebaseapp.com",
  databaseURL: "https://test-c617c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-c617c",
  storageBucket: "test-c617c.appspot.com",
  messagingSenderId: "218014516803",
  appId: "1:218014516803:web:e04813ee6c0bd8ad1a36f6",
  measurementId: "G-365C19T5KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);