import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
require('dotenv').config();

const Index = () => (
  <div>
    <App />
  </div>
);
ReactDOM.hydrate(<Index />, document.getElementById('root'));
