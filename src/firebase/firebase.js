import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBbbjN2J8lT0PUemngL31OFTDG_jlw0E-A",
    authDomain: "expensify-course-b399f.firebaseapp.com",
    databaseURL: "https://expensify-course-b399f.firebaseio.com",
    projectId: "expensify-course-b399f",
    storageBucket: "expensify-course-b399f.appspot.com",
    messagingSenderId: "147457939770"
}

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
