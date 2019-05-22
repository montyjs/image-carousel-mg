import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './imageSubComponents/carousel';

const MediaWrapper = ({ activeImage, images, clickHandler }) => (
  <div className="product-media-wrapper">
    <div className="jumbo-wrapper">
      <img src={activeImage.url} alt={`${activeImage.color} from the ${activeImage.orientation}`} />
    </div>
    <Carousel images={images} handler={clickHandler} />
  </div>
);

export default MediaWrapper;

MediaWrapper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  activeImage: PropTypes.shape({
    color: PropTypes.string,
    id: PropTypes.number,
    orientation: PropTypes.string,
    size: PropTypes.string,
    url: PropTypes.string,
  }),
  clickHandler: PropTypes.func,
};

MediaWrapper.defaultProps = {
  images: [],
  activeImage: {
    color: 'flame',
    id: 21,
    orientation: 'angle',
    size: 'full',
    url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame/angle_full.jpg',
  },
  clickHandler: () => {},
};
