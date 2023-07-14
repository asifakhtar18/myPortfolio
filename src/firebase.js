
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBPyxdXEtvNDJ9DQULNbVuQgsjj5TCYJYg",
  authDomain: "myportfolio-asif.firebaseapp.com",
  projectId: "myportfolio-asif",
  storageBucket: "myportfolio-asif.appspot.com",
  messagingSenderId: "773194320331",
  appId: "1:773194320331:web:1ec7ba3a9d23de79bece4e",
  measurementId: "G-TM21BEPVWR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const storage = app.storage();


export { db , storage }