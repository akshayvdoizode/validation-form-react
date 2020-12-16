import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8jzx0JE5PmmeUEwdVLj6eRu964gn3FAM",
  authDomain: "task-8d186.firebaseapp.com",
  projectId: "task-8d186",
  storageBucket: "task-8d186.appspot.com",
  messagingSenderId: "795079320183",
  appId: "1:795079320183:web:931182816577c9e5bd1c72",
  measurementId: "G-7Z9J7TBZXF",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebaseapp.auth();
const db = firebaseapp.firestore();
export default db;
export { auth, db };
