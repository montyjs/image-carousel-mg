import React from 'react';
import PropTypes from 'prop-types';

const ReviewStars = ({ rating }) => (
  <div className="review-stars">
    {[1, 2, 3, 4, 5].map((star) => {
      // These variables determine how much of the star we are going to fill.
      // Vals splits the rating into the whole integer and the decimal.
      //   eg. '4.7' -> [4, 7]
      const vals = [Number(rating.split('.')[0]), Number(rating.split('.')[1])];

      // if not patially filled, is it full or empty?
      //   eg. vals[0] is 2 and star is 4 -> (star is not filled in) return '0%'
      const notPartialFill = star - 1 < vals[0] ? '99%' : '0%';

      // if star is partially filled or not.
      //   eg. vals[0] is 4 and star is 5 -> (partial fill) vals[1] is 3 -> return '30%'
      const starFill = star - 1 === vals[0] ? `${vals[1] * 10}%` : notPartialFill;

      return (
        <svg height="16px" width="16px" viewBox="0 0 25 25" key={`${star}star`}>
          <polygon
            points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856"
            style={{ fill: `url(#use${star})` }}
          />
          {/* when defs is 'used', it dictates how the svg is styled.
              defs is refrenced by url().
              Where the linear gradient starts is determined by the starFill const
          */}
          <defs>
            <linearGradient id={`use${star}`} x1={starFill} x2="100%" y1="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#BD5B0D' }} />
              <stop offset="1%" style={{ stopColor: '#C5C5C5' }} />
            </linearGradient>
          </defs>
        </svg>
      );
    })}
  </div>
);

ReviewStars.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default ReviewStars;
