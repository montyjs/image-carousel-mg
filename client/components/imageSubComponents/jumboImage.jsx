import React from 'react';
import PropTypes from 'prop-types';


const JumboImage = ({
  url, color, orientation, handlers, mousePosition, hover,
}) => {
  const hideZoomCursor = () => { document.getElementById('zoom-cursor').style.display = 'none'; };
  return (
    <div className="jumbo-wrapper">
      <div style={{ display: hover ? 'block' : 'none' }}>
        HOOVER DAMN
      </div>
      <img
        src={url}
        alt={`${color} from the ${orientation}`}
        onMouseEnter={handlers.updateHover}
        onMouseMove={handlers.handleZoom}
        onMouseOut={handlers.updateHover}
        onBlur={handlers.updateHover}
        onFocus={handlers.handleZoom}
      />
    </div>);
};

JumboImage.propTypes = {
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  orientation: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  hover: PropTypes.bool.isRequired,
};

export default JumboImage;
