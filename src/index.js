import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCvN3kB8wcdzr1vtGXy_6o0ISa78cOwecw",
    authDomain: "react-shopy.firebaseapp.com",
    databaseURL: "https://react-shopy-default-rtdb.firebaseio.com",
    projectId: "react-shopy",
    storageBucket: "react-shopy.appspot.com",
    messagingSenderId: "647614536167",
    appId: "1:647614536167:web:92039780764c623b144542",
    measurementId: "G-B0H1GYBRCZ"
}

firebase.initializeApp(firebaseConfig);

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
reportWebVitals();
