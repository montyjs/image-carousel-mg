import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const Index = () => (
  <div>
    your fancy react app
    <App />
  </div>
);
ReactDOM.render(<Index />, document.getElementById('root'));
