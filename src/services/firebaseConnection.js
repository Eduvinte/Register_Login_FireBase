

import { initializeApp } from 'firebase/app'
// Chamando elementos que vamos a usar do firebase
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Nossas credenciales
const firebaseConfig = {
    apiKey: "AIzaSyA01Vf7SNFSj7dAt-Tymc8wvL0eHNcViCQ",
    authDomain: "tickets2-9695d.firebaseapp.com",
    projectId: "tickets2-9695d",
    storageBucket: "tickets2-9695d.appspot.com",
    messagingSenderId: "912994548704",
    appId: "1:912994548704:web:fa42471ec995e5aa05c985",
    measurementId: "G-4MPZLV166W"
  };

  // Estamos passando nossas credenciales al initializeApp, que viene de firebaseConfig
const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }