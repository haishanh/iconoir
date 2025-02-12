import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const CropRotateBr = forwardRef(
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
            d="M11.748 18.2501H15.748C17.9572 18.2501 19.748 16.4592 19.748 14.2501V13.2501"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.248 20.7501L11.748 18.2501L14.248 15.7501"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.74805 12.2501L11.748 12.2501C12.3003 12.2501 12.748 11.8023 12.748 11.2501L12.748 3.25006"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.748 5.25006L6.74805 5.25006C6.19576 5.25006 5.74805 5.69778 5.74805 6.25006L5.74805 14.2501"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

CropRotateBr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CropRotateBr.displayName = 'CropRotateBr';

export default CropRotateBr;
