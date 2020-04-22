import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase';
import 'leaflet/dist/leaflet.css';

const firebaseConfig = {
  apiKey: "AIzaSyBlSr_TPWysg1z9Y8kHYNXPSMWSzRuJMUk",
  authDomain: "housing-4b273.firebaseapp.com",
  databaseURL: "https://housing-4b273.firebaseio.com",
  projectId: "housing-4b273",
  storageBucket: "housing-4b273.appspot.com",
  messagingSenderId: "215279652456",
  appId: "1:215279652456:web:f1afc96412c190852cf5dd",
  measurementId: "G-66PN7X0D9Q"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
