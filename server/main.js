import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/components/app.jsx';
import style from '../shared/main.scss';


const renderHydrate = Component => {
  ReactDOM.hydrate(
    <Component />,
    document.getElementById('root')
  );
};

renderHydrate(App);
