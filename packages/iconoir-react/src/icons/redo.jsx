import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Redo = forwardRef(({ color = 'currentColor', size = 24 }, ref) => {
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
          d="M19 9.5C15.5 9.5 12.5 9.5 9 9.5C8.83847 9.5 5 9.5 5 13.5C5 18 8.70237 18 9 18C12 18 14 18 17 18"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.5 13C16.8668 11.6332 17.6332 10.8668 19 9.5C17.6332 8.13317 16.8668 7.36683 15.5 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </svg>
  );
});

Redo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Redo.displayName = 'Redo';

export default Redo;
