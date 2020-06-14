import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../configs/firebase";

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

export function signOut() {
  return firebase.auth().signOut();
}

export function signInWithGoogle() {
  return firebase.auth().signInWithPopup(googleProvider);
}

export const db = firebase.firestore();
