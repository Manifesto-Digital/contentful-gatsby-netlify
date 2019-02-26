import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const InlineBanner = styled.div`
  position: relative;
  clear: both;
  background: ${props =>
    (props.bannerColour === 'default' && props.theme.palette.offWhite) ||
    (props.bannerColour === 'grey' && props.theme.palette.offWhite) ||
    (props.bannerColour === 'white' && props.theme.palette.white) ||
    (props.bannerColour === 'transparent' && 'transparent')};

  padding: ${props => props.theme.spacing.standard};
  margin-bottom: 1em;
  border-left: 4px solid;
  border-color: ${props =>
    (props.borderColour === 'default' && props.theme.palette.primary) ||
    (props.borderColour === 'red' && props.theme.palette.primary) ||
    (props.borderColour === 'grey' && props.theme.palette.grey45) ||
    (props.borderColour === 'facebook-blue' && props.theme.palette.facebook) ||
    (props.borderColour === 'twitter-blue' && props.theme.palette.twitter) ||
    (props.borderColour === 'whatsapp-green' && props.theme.palette.whatsapp)};
`;

export const TextWrapper = styled.div`
  display: inline-block;
  & > :last-child {
    margin-bottom: 0;
  }
`;

export const BannerSVG = styled(SVG)`
  fill: ${props => props.theme.palette.black};
  width: 30px;
  height: 30px;
  margin-right: 1em;
  display: inline-block;
  vertical-align: top;

  + div {
    width: calc(100% - 3em);
  }
`;
