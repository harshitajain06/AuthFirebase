import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV2Q-_nJIcRHGUbhtwu8eKN9UAeaPvwQw",
    authDomain: "fir-authentication-8abb6.firebaseapp.com",
    projectId: "fir-authentication-8abb6",
    storageBucket: "fir-authentication-8abb6.appspot.com",
    messagingSenderId: "854259513422",
    appId: "1:854259513422:web:9a3d38f04501b643f0ab1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
})

export const db = getFirestore(app);

export const usersRef = collection(db,'users');