// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj9zqHdiut6-a7QJw5lFq3m-RD0-Q3cvY",
  authDomain: "app-admin-portal.firebaseapp.com",
  projectId: "app-admin-portal",
  storageBucket: "app-admin-portal.appspot.com",
  messagingSenderId: "496095659323",
  appId: "1:496095659323:web:bb9e442a203f89c11a631e",
  measurementId: "G-12S0T96FPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    app,
    analytics,
    auth
}

console.log("firebase connected")