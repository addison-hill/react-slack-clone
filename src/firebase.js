import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyB-O5aO3aSdGNVYcYsWqeugOR2Y6PiIDwA",
    authDomain: "react-slack-clone-cae4c.firebaseapp.com",
    databaseURL: "https://react-slack-clone-cae4c-default-rtdb.firebaseio.com",
    projectId: "react-slack-clone-cae4c",
    storageBucket: "react-slack-clone-cae4c.appspot.com",
    messagingSenderId: "381510324418",
    appId: "1:381510324418:web:b46a69d9fbb38edc8c2b5b",
    measurementId: "G-492773Q4EQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;