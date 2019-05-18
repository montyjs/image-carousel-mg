import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const Index = () => (
  <div>
    your fancy react app
    vvvv Usint Hooks vvvv
    <App />
  </div>
);
ReactDOM.render(<Index />, document.getElementById('root'));
