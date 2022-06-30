import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDcjRBnEIPND-NOTweGpORfaZBjdPdK4I",
  authDomain: "telegram-clone-e9f24.firebaseapp.com",
  projectId: "telegram-clone-e9f24",
  storageBucket: "telegram-clone-e9f24.appspot.com",
  messagingSenderId: "54792597912",
  appId: "1:54792597912:web:38ebdf64c07d9db3bc3bed",
  measurementId: "G-Y5DMDE7TW8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;