import React from 'react';
import PropTypes from 'prop-types';


const JumboImage = ({
  url, color, orientation, handlers, mousePosition, hover,
}) => {
  const hoverStyles = {
    display: hover ? 'block' : 'none',
    left: mousePosition.x + 790 - mousePosition.imgWidth,
    top: mousePosition.y + 480 - mousePosition.imgHeight,
  };
  return (
    <div className="jumbo-wrapper">
      <div className="hover-wrapper" style={hoverStyles} />
      <img
        id="jumbo"
        src={url}
        alt={`${color} from the ${orientation}`}
        onMouseEnter={handlers.updateHover}
        onMouseMove={handlers.handleZoom}
        onMouseOut={handlers.updateHover}
        onBlur={handlers.updateHover}
        onFocus={handlers.handleZoom}
      />
    </div>
  );
};

JumboImage.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  handlers: PropTypes.shape({
    updateHover: PropTypes.func,
    handleZoom: PropTypes.func,
  }).isRequired,
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  hover: PropTypes.bool.isRequired,
};

export default JumboImage;
