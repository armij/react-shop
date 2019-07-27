import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC3-i87DSFruZO_aPi-_FvWYdnDVD9f2Jo",
  authDomain: "react-shop-3bb24.firebaseapp.com",
  databaseURL: "https://react-shop-3bb24.firebaseio.com",
  projectId: "react-shop-3bb24",
  storageBucket: "",
  messagingSenderId: "616250531956",
  appId: "1:616250531956:web:03cec53d4d2167d3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//project-616250531956
export default firebase;
