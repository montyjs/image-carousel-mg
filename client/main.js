import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/components/App.jsx';

const renderHydrate = Component => {
  ReactDOM.hydrate(
    <Component />,
    document.getElementById('root')
  );
};

renderHydrate(App);