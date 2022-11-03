import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZo_PI7-QKPbHw01sj5hbRpNveB8ndNlQ",
    authDomain: "muso-11806.firebaseapp.com",
    projectId: "muso-11806",
    storageBucket: "muso-11806.appspot.com",
    messagingSenderId: "865995481710",
    appId: "1:865995481710:web:d97622d410c0b076e97c7f",
    measurementId: "G-9YZC2ZW2GK"
  };


  // init firebase 
  firebase.initializeApp(firebaseConfig)

  //init services 
  const projectFirestore = firebase.firebase()
  const projectAuth = firebase.auth()

  //timestamp 

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { timestamp, projectFirestore, projectAuth }