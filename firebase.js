// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ2-tY3JZEc3Uusb2ILTuFxHyVpO0d4jw",
    authDomain: "lascola-software.firebaseapp.com",
    projectId: "lascola-software",
    storageBucket: "lascola-software.appspot.com",
    messagingSenderId: "145753795877",
    appId: "1:145753795877:web:244466db990fbe39ebfecc"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
