import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU62CrSHkNc5ZVLwy6Z5zKNRbwoJ3QTAE",
  authDomain: "dhayakattai-c2e4f.firebaseapp.com",
  projectId: "dhayakattai-c2e4f",
  storageBucket: "dhayakattai-c2e4f.appspot.com",
  messagingSenderId: "634247588146",
  appId: "1:634247588146:web:d953d376ea3f651e3d4f2b",
  measurementId: "G-SMJD1GP0DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
