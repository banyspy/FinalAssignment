import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyAmVoYdKzxRmg_WnXiNFO949Hl1aEaMiyA",
    authDomain: "dcwfinalassignment-d8aa6.firebaseapp.com",
    projectId: "dcwfinalassignment-d8aa6",
    storageBucket: "dcwfinalassignment-d8aa6.appspot.com",
    messagingSenderId: "796728731973",
    appId: "1:796728731973:web:9e509fab0d51fcce26362c",
    measurementId: "G-85EQE8XCP9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
