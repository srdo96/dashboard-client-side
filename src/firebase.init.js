import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQGcXNSnb4MAvbAi2_ayD1_PPg4aJfSZc",
  authDomain: "dashboard-cb64d.firebaseapp.com",
  projectId: "dashboard-cb64d",
  storageBucket: "dashboard-cb64d.appspot.com",
  messagingSenderId: "563043867162",
  appId: "1:563043867162:web:0a28ee968b599b6a4f8fa3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
