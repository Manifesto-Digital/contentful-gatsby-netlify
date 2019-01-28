import { css } from 'styled-components';

const sizes = {
  desktopWide: 1170,
  desktop: 992,
  tabletWide: 741,
  tablet: 641,
  mobileLand: 512,
  mobile: 359,
};

// iterate through the sizes and create a media template
export const breakpoint = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
