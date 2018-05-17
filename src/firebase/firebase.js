import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA1X3lOvepyRzAxI3RUsfr-qvw6pHyghwA",
    authDomain: "grindstone-app.firebaseapp.com",
    databaseURL: "https://grindstone-app.firebaseio.com",
    projectId: "grindstone-app",
    storageBucket: "grindstone-app.appspot.com",
    messagingSenderId: "621845519726"
  };

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
