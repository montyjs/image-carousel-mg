import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  color, id, orientation, size, url,
}) => (
  <div className="carousel-item">
    <img src={url} alt={`${color} ${orientation}`} />
  </div>
);

export default Item;

Item.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  orientation: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
