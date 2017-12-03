import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './pages/Login'; // can put .js like App.js 
import registerServiceWorker from './registerServiceWorker'; 
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './styles/semantic.min.css';

//can coding without ; 

ReactDOM.render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
