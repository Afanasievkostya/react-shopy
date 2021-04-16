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

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
reportWebVitals();
