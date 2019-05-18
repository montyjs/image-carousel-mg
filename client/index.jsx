import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import style from './main.scss';

const Index = () => (
  <div>
    <App />
  </div>
);
ReactDOM.render(<Index />, document.getElementById('root'));
