import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './imageSubComponents/carousel';
import ProductInfo from './imageSubComponents/productInfo';

const MediaWrapper = ({ active, images, clickHandler }) => (
  <div className="product-media-wrapper">
    <div className="jumbo-wrapper">
      <img src={active.url} alt={`${active.color} from the ${active.orientation}`} />
    </div>
    <Carousel images={images} handler={clickHandler} />
    <ProductInfo {...active} />
  </div>
);


MediaWrapper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.shape({
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
  active: {
    color: 'flame',
    id: 21,
    orientation: 'angle',
    size: 'full',
    url: 'https://s3-us-west-2.amazonaws.com/fec-rei/flame/angle_full.jpg',
  },
  clickHandler: () => {},
};

export default MediaWrapper;
