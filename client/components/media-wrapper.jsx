import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './imageSubComponents/carousel';
import ProductInfo from './imageSubComponents/imageInfo';
import ZoomCursor from './imageSubComponents/zoomCursor';

const MediaWrapper = ({
  active, images, handlers, carouselPosition, mousePosition,
}) => {
  const hideZoomCursor = () => { document.getElementById('zoom-cursor').style.display = 'none'; };
  return (
    <div className="product-media-wrapper">
      <div className="jumbo-wrapper">
        <img
          src={active.url}
          alt={`${active.color} from the ${active.orientation}`}
          onMouseEnter={handlers.handleZoom}
          onMouseMove={handlers.handleZoom}
          onMouseOut={hideZoomCursor}
          onBlur={hideZoomCursor}
          onFocus={handlers.handleZoom}
        />
      </div>
      <Carousel images={images} pos={carouselPosition} handlers={handlers} />
      <ProductInfo {...active} count={images.length} />
      <ZoomCursor {...active} mousePosition={mousePosition} />
    </div>
  );
};


MediaWrapper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.shape({
    color: PropTypes.string,
    id: PropTypes.number,
    orientation: PropTypes.string,
    size: PropTypes.string,
    url: PropTypes.string,
  }),
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  handlers: PropTypes.shape({
    handleImageClick: PropTypes.func,
    handleCarouselPos: PropTypes.func,
    handleZoom: PropTypes.func,
  }),
  carouselPosition: PropTypes.number,
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
  mousePosition: {
    x: 0,
    y: 0,
  },
  handlers: {
    handleImageClick: () => {},
    handleCarouselPos: () => {},
    handleZoom: () => {},
  },
  carouselPosition: 0,
};

export default MediaWrapper;
