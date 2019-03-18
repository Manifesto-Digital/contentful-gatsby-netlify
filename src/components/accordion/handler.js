import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { sizes } from '../theme/breakpoint';

/**
 *
 * This wrapper component will attach one event listener if mobile only is chosen
 * this will trigger all child accordions to update to respect if they should be
 * in an accordion state or not.
 *
 */
const AccordionsHandler = ({ render, mobileOnly }) => {
  const [childrenState, setChildrenState] = useState(false);

  // On resize just remove the stickyBarPosition so it will calculate again on next scroll
  const handleResize = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (windowWidth > sizes.tablet && childrenState) {
      setChildrenState(false);
    } else if (windowWidth <= sizes.tablet && !childrenState) {
      setChildrenState(true);
    }
  };

  useEffect(() => {
    if (mobileOnly) {
      let resizeTimer;
      handleResize();

      window.addEventListener('resize', () => {
        // Simple debounce
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          handleResize();
        }, 200);
      });
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  });

  return render(childrenState);
};

AccordionsHandler.propTypes = {
  mobileOnly: PropTypes.bool,
  render: PropTypes.func.isRequired,
};

export default AccordionsHandler;
