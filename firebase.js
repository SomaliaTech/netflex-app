// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA7ok4-mLI4HSGysj83bf3C4mgUOtVgSo",
  authDomain: "netflix-e0aab.firebaseapp.com",
  projectId: "netflix-e0aab",
  storageBucket: "netflix-e0aab.appspot.com",
  messagingSenderId: "442947059602",
  appId: "1:442947059602:web:c4cb82e271bd93eb88cb4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}