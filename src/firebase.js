import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBTUOWnmX2j2pvuwuDp3jdBJ3r0MDXylts",
    authDomain: "koob-ec026.firebaseapp.com",
    databaseURL: "https://koob-ec026.firebaseio.com",
    projectId: "koob-ec026",
    storageBucket: "koob-ec026.appspot.com",
    messagingSenderId: "91657801632",
    appId: "1:91657801632:web:c0560b28ed03b11c8f5ec5"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
const db = firebase.firestore()
export default db;