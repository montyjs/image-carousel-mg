import React from 'react';
import PropTypes from 'prop-types';

const ProductInfo = ({
  color, id, orientation, handler,
}) => {
  const orientPruned = `${orientation.slice(0, 1).toUpperCase}${orientation.slice(1)}`;
  return (
    <div className="row product-info">
      <p>
        {`Image ${id}`}
        <span>
          {orientPruned}
        </span>
      </p>
    </div>
  );
};


ProductInfo.propTypes = {
  color: PropTypes.string,
  id: PropTypes.number,
  orientation: PropTypes.string,
};
ProductInfo.defaultProps = {

  color: 'Flame',
  id: 1,
  orientation: 'front',
};
export default ProductInfo;
