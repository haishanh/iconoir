import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Droplet = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 13.8C19 9.82355 12 3 12 3C12 3 5 9.82355 5 13.8C5 17.7765 8.13401 21 12 21C15.866 21 19 17.7765 19 13.8Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </svg>
      </svg>
    );
  }
);

Droplet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Droplet.displayName = 'Droplet';

export default Droplet;
