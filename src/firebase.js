import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyDUU9t-aMif2yWJRgQFdwpzxgBPEVMq9Ro",
        authDomain: "fbmessenger-clone.firebaseapp.com",
        databaseURL: "https://fbmessenger-clone.firebaseio.com",
        projectId: "fbmessenger-clone",
        storageBucket: "fbmessenger-clone.appspot.com",
        messagingSenderId: "874442206906",
        appId: "1:874442206906:web:bd8371803f2c6f2d869c83",
        measurementId: "G-X6T5D7YT4K"
      

});

const db = firebase.firestore();

export default db;

