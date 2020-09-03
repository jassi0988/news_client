import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Signup from './component/signup';
import 'bootstrap/dist/css/bootstrap.css';
// import './custom.css'
import './style.css'
import Header from './component/common/header'
import Footer from './component/common/footer'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
