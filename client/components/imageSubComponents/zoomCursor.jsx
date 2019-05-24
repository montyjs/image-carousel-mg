import React from 'react';
import PropTypes from 'prop-types';


const ZoomCursor = ({ url, mousePosition, hover }) => {
  const styles = {
    left: -mousePosition.x,
    top: -mousePosition.y,
  };
  return (
    <div id="zoom-cursor" style={{ display: hover ? 'block ' : 'none' }}>
      <img src={url} style={styles} alt="zoom cursor!" />
    </div>
  );
};

export default ZoomCursor;
