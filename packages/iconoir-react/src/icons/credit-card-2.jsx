import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const CreditCard2 = forwardRef(
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
            d="M2 9V5.6C2 5.26863 2.26863 5 2.6 5H21.4C21.7314 5 22 5.26863 22 5.6V9V18.4C22 18.7314 21.7314 19 21.4 19H2.6C2.26863 19 2 18.7314 2 18.4V9ZM2 9H16"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="15"
            y="12"
            width="4"
            height="4"
            rx="0.6"
            fill="currentColor"
          />
        </svg>
      </svg>
    );
  }
);

CreditCard2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CreditCard2.displayName = 'CreditCard2';

export default CreditCard2;
