import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCCi3madksfrywmjhdfeCW_uNWXz9szzaE",
    authDomain: "react-native-auth-dff63.firebaseapp.com",
    projectId: "react-native-auth-dff63",
    storageBucket: "react-native-auth-dff63.appspot.com",
    messagingSenderId: "964414825865",
    appId: "1:964414825865:web:1ffcc4a1a5c7f9d6e46d58",
    measurementId: "G-D6E3EJPQZP"
};



export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);