// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxu9o1-dMzE2PQORrC5rcgEDcI3IJmqAM",
  authDomain: "rafis-blackboard.firebaseapp.com",
  projectId: "rafis-blackboard",
  storageBucket: "rafis-blackboard.appspot.com",
  messagingSenderId: "622591288254",
  appId: "1:622591288254:web:031f2c7732b6c2c9370fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;