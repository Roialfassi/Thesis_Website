import firebase from "firebase/app";
import "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const settings = { timestampsInSnapshots: true };
const config = {
  apiKey: "AIzaSyB70IFdsSJ056tK0OWqEJMEnzhRQuAHuPI",
  authDomain: "parashot-88db8.firebaseapp.com",
  projectId: "parashot-88db8",
  storageBucket: "parashot-88db8.appspot.com",
  messagingSenderId: "754346365422",
  appId: "1:754346365422:web:3a3c5096fed773e4237eff",
  measurementId: "G-8Q98XS0NPJ"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);
firebase.auth().signInAnonymously();

export default firebase;