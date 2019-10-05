import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8eVblEOSNrm1GuI_JgIWk01GOECplW8A",
    authDomain: "comentaki-app-devpleno.firebaseapp.com",
    databaseURL: "https://comentaki-app-devpleno.firebaseio.com",
    projectId: "comentaki-app-devpleno",
    storageBucket: "",
    messagingSenderId: "811415908251",
    appId: "1:811415908251:web:fd718b19c766c850a27b3e"
  }
  firebase.initializeApp(firebaseConfig)

  export default firebase