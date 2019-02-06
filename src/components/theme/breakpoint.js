import { css } from 'styled-components';

export const sizes = {
  desktopWide: 1170,
  desktop: 992,
  tablet: 641,
  mobileLand: 512,
  mobile: 359,
};

// generate the em size of a pix value as a string with the 'em' suffix
export const emSize = size => `${size / 16}em`;

// iterate through the sizes and create a media template
export const breakpoint = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize(sizes[label])}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
