import React from 'react';
import PropTypes from 'prop-types';

const ZoomCursor = ({ url }) => (
  <div className="zoom-cursor">
    <img src={url} alt="zoom cursor!" />
  </div>
);

export default ZoomCursor;
