import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA52VWrGcekXZD0bVp0t2O0CkjDoVnwyqE",
    authDomain: "slack-clone-9b6d8.firebaseapp.com",
    projectId: "slack-clone-9b6d8",
    storageBucket: "slack-clone-9b6d8.appspot.com",
    messagingSenderId: "439031735512",
    appId: "1:439031735512:web:80700074f4b4ba87b9a3ad",
    measurementId: "G-ZWM30XGFG7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;