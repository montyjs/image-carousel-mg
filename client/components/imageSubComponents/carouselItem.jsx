import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  color, id, orientation, url, index, handler,
}) => (
  <div className="carousel-item" onClick={handler} onKeyPress={handler} role="button" tabIndex={id}>
    <img
      src={url}
      data-color={color}
      data-index={index}
      data-orientation={orientation}
      alt={`${color} ${orientation}`}
    />
  </div>
);

export default Item;

Item.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  orientation: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
