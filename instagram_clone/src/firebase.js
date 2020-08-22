import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
//here are the configurations that you need to put from firebase
});

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
