// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyBTcghiEc8WgDJ44dF6z0J4DCQHZxEDgyk',
   authDomain: 'airbnb-clone-e7d2b.firebaseapp.com',
   projectId: 'airbnb-clone-e7d2b',
   storageBucket: 'airbnb-clone-e7d2b.appspot.com',
   messagingSenderId: '1018188320118',
   appId: '1:1018188320118:web:5b9b77afa0d415d8e8fe57',
   measurementId: 'G-HSR09D9BEQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
