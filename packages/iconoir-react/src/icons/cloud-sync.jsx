import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const CloudSync = forwardRef(
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
          <g clip-path="url(#clip0)">
            <path
              d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.58059 19.4874L9.34836 21.2552C10.9105 22.8173 13.4431 22.8173 15.0052 21.2552L15.3588 20.9016"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.93413 21.9623L7.58058 19.4874L10.0554 19.841L7.93413 21.9623Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9497 16.4822C17.2426 16.7751 17.2426 17.25 16.9497 17.5429C16.6568 17.8358 16.182 17.8358 15.8891 17.5429L16.9497 16.4822ZM9.17156 16.1287C8.87867 16.4216 8.4038 16.4216 8.1109 16.1287C7.81801 15.8358 7.81801 15.3609 8.1109 15.068L9.17156 16.1287ZM15.182 14.7145L16.9497 16.4822L15.8891 17.5429L14.1213 15.7751L15.182 14.7145ZM9.52512 15.7751L9.17156 16.1287L8.1109 15.068L8.46446 14.7145L9.52512 15.7751ZM14.1213 15.7751C12.8521 14.5059 10.7943 14.5059 9.52512 15.7751L8.46446 14.7145C10.3194 12.8595 13.327 12.8595 15.182 14.7145L14.1213 15.7751Z"
              fill="black"
            />
            <path
              d="M16.4194 17.0126L17.1619 16.9065C17.1953 17.1402 17.1167 17.376 16.9498 17.5429C16.7828 17.7098 16.5471 17.7884 16.3134 17.755L16.4194 17.0126ZM16.0659 14.5377L15.5355 14.0074C15.7364 13.8065 16.0335 13.7364 16.303 13.8262C16.5725 13.916 16.7682 14.1504 16.8083 14.4316L16.0659 14.5377ZM13.9446 16.659L13.8385 17.4015C13.5573 17.3613 13.3229 17.1657 13.233 16.8962C13.1432 16.6267 13.2133 16.3296 13.4142 16.1287L13.9446 16.659ZM15.677 17.1186L15.3234 14.6438L16.8083 14.4316L17.1619 16.9065L15.677 17.1186ZM16.3134 17.755L13.8385 17.4015L14.0506 15.9166L16.5255 16.2701L16.3134 17.755ZM16.5962 15.068L14.4749 17.1894L13.4142 16.1287L15.5355 14.0074L16.5962 15.068Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </svg>
    );
  }
);

CloudSync.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloudSync.displayName = 'CloudSync';

export default CloudSync;
