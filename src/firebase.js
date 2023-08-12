


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKZmvYo3VIoqAvHIaknd_gO-6yV4lvdG4',
  authDomain: 'note-85787.firebaseapp.com',
  projectId: 'note-85787',
  storageBucket: 'note-85787.appspot.com',
  messagingSenderId: '1029201554424',
  appId: '1:1029201554424:web:fed92ae9b78a3b1d68840d',
  measurementId: 'G-PDMBDB7NVQ',
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

export default firestore;

