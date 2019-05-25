import React from 'react';

const ReviewStars = ({ review }) => (
  <div className="review-stars">
    {[1, 2, 3, 4, 5].map(star => (
      <svg height="16px" width="16px" viewBox="0 0 25 25" key={`${star}star`}>
        <polygon
          points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856"
          style={{ fill: document.getElementById(`use${star}`) }}
        />
        <defs>
          <linearGradient id={`use${star}`} x1="60%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#BD5B0D' }} />
            <stop offset="1%" style={{ stopColor: '#C5C5C5' }} />
          </linearGradient>
        </defs>
      </svg>
    ))}
  </div>
);

export default ReviewStars;
