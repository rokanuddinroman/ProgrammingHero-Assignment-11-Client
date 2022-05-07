// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLtCIe0HsLMJ4lFp9iBrZz8UvnExYzey0",
    authDomain: "assignment-task-22ae6.firebaseapp.com",
    projectId: "assignment-task-22ae6",
    storageBucket: "assignment-task-22ae6.appspot.com",
    messagingSenderId: "1053620234902",
    appId: "1:1053620234902:web:1320675183797c66e3f0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;