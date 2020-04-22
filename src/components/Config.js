import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBlSr_TPWysg1z9Y8kHYNXPSMWSzRuJMUk",
  authDomain: "housing-4b273.firebaseapp.com",
  databaseURL: "https://housing-4b273.firebaseio.com",
  storageBucket: "housing-4b273.appspot.com",
  messagingSenderId: "215279652456"
};
var fire = firebase.initializeApp(config);
export default fire;