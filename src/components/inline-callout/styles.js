import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const InlineBanner = styled.div`
  position: relative;
  clear: both;
  background: ${({ bannerColour, theme }) =>
    (bannerColour === 'default' && theme.palette.offWhite) ||
    (bannerColour === 'grey' && theme.palette.offWhite) ||
    (bannerColour === 'white' && theme.palette.white) ||
    (bannerColour === 'transparent' && 'transparent')};

  padding: ${({ theme }) => theme.spacing.standard};
  margin-bottom: 1em;
  border-left: 4px solid;
  border-color: ${({ borderColour, theme }) =>
    (borderColour === 'default' && theme.palette.primary) ||
    (borderColour === 'red' && theme.palette.primary) ||
    (borderColour === 'grey' && theme.palette.grey45) ||
    (borderColour === 'facebook-blue' && theme.palette.facebook) ||
    (borderColour === 'twitter-blue' && theme.palette.twitter) ||
    (borderColour === 'whatsapp-green' && theme.palette.whatsapp)};
`;

export const TextWrapper = styled.div`
  display: inline-block;
  & > :last-child {
    margin-bottom: 0;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`;

export const BannerSVG = styled(SVG)`
  fill: ${({ theme }) => theme.palette.black};
  width: 30px;
  height: 30px;
  margin-right: 1em;
  display: inline-block;
  vertical-align: top;

  + div {
    width: calc(100% - 3em);
  }
`;
