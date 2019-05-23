import React from 'react';
import PropTypes from 'prop-types';

const ImageInfo = ({
  color, index, orientation, count,
}) => {
  const orientPruned = `${orientation.slice(0, 1).toUpperCase()}${orientation.slice(1)}`;
  return (
    <div className="row product-info">
      <p>
        {`Image ${index} of ${count} `}
        <span>
          {`${orientPruned} view (${color})`}
        </span>
      </p>
    </div>
  );
};


ImageInfo.propTypes = {
  color: PropTypes.string,
  index: PropTypes.number,
  orientation: PropTypes.string,
  count: PropTypes.number,
};
ImageInfo.defaultProps = {

  color: 'Flame',
  index: 1,
  orientation: 'front',
  count: -10,
};
export default ImageInfo;
