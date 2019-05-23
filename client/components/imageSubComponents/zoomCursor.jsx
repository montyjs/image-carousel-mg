import React from 'react';
import PropTypes from 'prop-types';


const ZoomCursor = ({ url, mousePosition }) => {
  const styles = {
    left: -mousePosition.x,
    top: -mousePosition.y,
  };
  return (
    <div id="zoom-cursor">
      <img src={url} style={styles} alt="zoom cursor!" />
    </div>
  );
};

export default ZoomCursor;
