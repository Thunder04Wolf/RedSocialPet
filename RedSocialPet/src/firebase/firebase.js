import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBTW4KHIsL-Y8HhvWzOTT0v6CVfNDrWc0g",
    authDomain: "socialmediapet-82b68.firebaseapp.com",
    projectId: "socialmediapet-82b68",
    storageBucket: "socialmediapet-82b68.appspot.com",
    messagingSenderId: "131415644662",
    appId: "1:131415644662:web:20ed636d6e9d1205840fd7",
    measurementId: "G-38CNZE6YKZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
