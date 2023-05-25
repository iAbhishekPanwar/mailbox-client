// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByRmjy5rBMsLgLYpFThgbNrTAuyasI8o4",
  authDomain: "mailbox-client-8c39e.firebaseapp.com",
  projectId: "mailbox-client-8c39e",
  storageBucket: "mailbox-client-8c39e.appspot.com",
  messagingSenderId: "212022640408",
  appId: "1:212022640408:web:5291860800b7dcaed8286d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
