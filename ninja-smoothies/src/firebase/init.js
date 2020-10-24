import firebase from 'firebase'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyAxSae_SYtYjkiWsgynL0QyMZD7cqed-lA",
  authDomain: "udemy-ninja-smoothies-bd2ba.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-bd2ba.firebaseio.com",
  projectId: "udemy-ninja-smoothies-bd2ba",
  storageBucket: "udemy-ninja-smoothies-bd2ba.appspot.com",
  messagingSenderId: "881344097511",
  appId: "1:881344097511:web:92a0047a49463169e54642"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({});

export default firebaseApp.firestore()