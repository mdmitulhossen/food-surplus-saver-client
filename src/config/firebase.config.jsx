// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const ENV = import.meta.env
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: ENV.VITE_apiKey,
    authDomain: ENV.VITE_authDomain,
    projectId: ENV.VITE_projectId,
    storageBucket: ENV.VITE_storageBucket,
    messagingSenderId: ENV.VITE_messagingSenderId,
    appId: ENV.VITE_appId
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;