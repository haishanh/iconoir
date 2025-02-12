import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const FrameSelect = forwardRef(
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
            d="M4.9984 2H2V4.9984H4.9984V2Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.99854 3.50098H18.9987"
            stroke="currentColor"
            stroke-width="1.50335"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 4.99854V19.0005"
            stroke="currentColor"
            stroke-width="1.35589"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.4978 5V19.002"
            stroke="currentColor"
            stroke-width="1.35589"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.99854 20.501H18.9987"
            stroke="currentColor"
            stroke-width="1.50335"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.9984 19H2V21.9984H4.9984V19Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.9974 2.00195H18.999V5.00035H21.9974V2.00195Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.9974 19.002H18.999V22.0004H21.9974V19.002Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9966 15.002L7.99658 8.00195L14.9966 11.002L11.9986 12.0009L10.9966 15.002Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.999 12.002L14.997 15.002L11.999 12.002Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

FrameSelect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FrameSelect.displayName = 'FrameSelect';

export default FrameSelect;
