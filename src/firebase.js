import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAOjADilGm_q2PvhvXjGMwvHFDjNK_SSfQ",
    authDomain: "bookstore-9108a.firebaseapp.com",
    projectId: "bookstore-9108a",
    storageBucket: "bookstore-9108a.appspot.com",
    messagingSenderId: "421270345284",
    appId: "1:421270345284:web:e66346c898ccd3e4ebce11",
    measurementId: "G-X9RXLM33KG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };