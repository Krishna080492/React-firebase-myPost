// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNzEk8nRA1zVU-_T6UfJmu5WP7WjyQw8c",
  authDomain: "my-post-256e1.firebaseapp.com",
  projectId: "my-post-256e1",
  storageBucket: "my-post-256e1.firebasestorage.app",
  messagingSenderId: "37922014464",
  appId: "1:37922014464:web:e5b139f13b67a1dac2dfe5",
  databaseURL: "https://my-post-256e1-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
