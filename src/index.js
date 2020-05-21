import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'

const elemento = document.getElementById('root');

ReactDOM.render(
  <div>
    <Menu />
    <App />
    <Footer />
  </div>
    
, elemento);


