import React from 'react';
import Carousel from './imageSubComponents/carousel';

const MediaWrapper = ({ activeImage, images, clickHandler }) => (
  <div className="product-media-wrapper">
    <div>
      <img src="" alt="" />
    </div>
    <Carousel handler={clickHandler} />
  </div>
);

export default MediaWrapper;

  <img src="https://s3-us-west-2.amazonaws.com/fec-rei/kiwi/back_kiwi_tarantulace_kiwigrey_5_8.jpg" alt="tarantulace" />;
