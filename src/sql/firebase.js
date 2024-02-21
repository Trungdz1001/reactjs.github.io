// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCts258-dVfiHZgiLloFL5k95g-8LvmDRs",
  authDomain: "app-worklist.firebaseapp.com",
  projectId: "app-worklist",
  storageBucket: "app-worklist.appspot.com",
  messagingSenderId: "64981797113",
  appId: "1:64981797113:web:febf3b4c9f07b359553a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)