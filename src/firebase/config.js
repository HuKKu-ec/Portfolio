// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBiv27ypOzNLqk_dPn1iZnqjhK9oMfwZiE',
  authDomain: 'portfolio-4d3ef.firebaseapp.com',
  projectId: 'portfolio-4d3ef',
  storageBucket: 'portfolio-4d3ef.firebasestorage.app',
  messagingSenderId: '194692993771',
  appId: '1:194692993771:web:18d68a7fe9f83cc11064ae',
  measurementId: 'G-H25JPLH9DE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
