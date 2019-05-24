import React from 'react';
import PropTypes from 'prop-types';

const ZoomCursor = ({ url, mousePosition, hover }) => {
  const styles = {
    left: -(mousePosition.x * 2 - 160),
    top: -(mousePosition.y * 2 - 240),
  };
  return (
    <div id="zoom-cursor" style={{ display: hover ? 'block ' : 'none' }}>
      <img src={url} style={styles} alt="zoom cursor!" />
    </div>
  );
};

ZoomCursor.propTypes = {
  url: PropTypes.string.isRequired,
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  hover: PropTypes.bool.isRequired,
};

export default ZoomCursor;
