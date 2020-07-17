
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeK3RjDqEg0PqS7gnPiSIJZXkkSjqOqMo",
    authDomain: "todo-app-cp-3553d.firebaseapp.com",
    databaseURL: "https://todo-app-cp-3553d.firebaseio.com",
    projectId: "todo-app-cp-3553d",
    storageBucket: "todo-app-cp-3553d.appspot.com",
    messagingSenderId: "458442522226",
    appId: "1:458442522226:web:e606107bdf08c4840acceb",
    measurementId: "G-WSK18Z84VH"
  });

  const db = firebaseApp.firestore();

  export default db;