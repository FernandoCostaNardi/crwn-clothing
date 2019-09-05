import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBrJvL27z08UEVcLqfg8ES4PTuX40P2emc",
  authDomain: "crwn-db-6bed2.firebaseapp.com",
  databaseURL: "https://crwn-db-6bed2.firebaseio.com",
  projectId: "crwn-db-6bed2",
  storageBucket: "",
  messagingSenderId: "484998708943",
  appId: "1:484998708943:web:1b835cffa5c16c81ff41ba"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
