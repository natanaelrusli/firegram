import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6hy2ORP8lvTlb3haDKjpoT1h4BGpjnds",
    authDomain: "firegram-d7aea.firebaseapp.com",
    databaseURL: "https://firegram-d7aea.firebaseio.com",
    projectId: "firegram-d7aea",
    storageBucket: "firegram-d7aea.appspot.com",
    messagingSenderId: "74847216034",
    appId: "1:74847216034:web:b8ed6eedcea9e54492d2fb",
    measurementId: "G-JLTTF35TGE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  export { projectStorage, projectFirestore, timestamp };