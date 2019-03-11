import styled from 'styled-components';

export const Banner = styled.section`
  padding: ${({ theme }) => theme.spacing.standard} 0;
  background-color: ${({ bannerColour, theme }) =>
    (bannerColour === 'red' && theme.palette.primary) ||
    (bannerColour === 'san-marino-blue' && theme.palette.sanMarinoBlue) ||
    (bannerColour === 'black' && theme.palette.black)};
  margin-bottom: ${({ removeMarginBottom, sidebar, theme }) =>
    (removeMarginBottom && '0') ||
    (sidebar && theme.spacing.standard) ||
    theme.spacing.large};
`;

export const Header = styled.h3`
  color: ${({ bannerColour, theme }) =>
    (bannerColour === 'red' && theme.palette.white) ||
    (bannerColour === 'san-marino-blue' && theme.palette.white) ||
    (bannerColour === 'black' && theme.palette.white)};
`;
