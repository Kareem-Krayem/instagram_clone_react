import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDaNVQ-aE94lJatdnBHmu4MpF6YPNHcvac",
    authDomain: "kareem-instagram-clone.firebaseapp.com",
    databaseURL: "https://kareem-instagram-clone.firebaseio.com",
    projectId: "kareem-instagram-clone",
    storageBucket: "kareem-instagram-clone.appspot.com",
    messagingSenderId: "967033896911",
    appId: "1:967033896911:web:d88b0e3e5a19f511601cba",
    measurementId: "G-Q0YRN3H8C9"
};
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };