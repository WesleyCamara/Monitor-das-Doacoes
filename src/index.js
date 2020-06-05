import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes';
import IntlProviderConfigured from './_i18n/IntlProviderConfigured';

const elemento = document.getElementById('root');

ReactDOM.render(
  <IntlProviderConfigured>
    <BrowserRouter forceRefresh={true}>
      <Routes />
    </BrowserRouter>
  </IntlProviderConfigured>
    
, elemento);