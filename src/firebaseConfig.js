// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfT5yttsr8191dE4x7xp9SuK341ExSjEM",
    authDomain: "muvi-aa512.firebaseapp.com",
    projectId: "muvi-aa512",
    storageBucket: "muvi-aa512.appspot.com",
    messagingSenderId: "241515155727",
    appId: "1:241515155727:web:c8298d834040a503e22e7a",
    measurementId: "G-1Q99PG1P55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
