import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import RichText from '../rich-text';

export const InlineBanner = styled.div`
  position: relative;
  clear: both;
  background: ${props =>
    (props.bannerCol === 'default' && props.theme.palette.offWhite) ||
    (props.bannerCol === 'grey' && props.theme.palette.offWhite) ||
    (props.bannerCol === 'white' && props.theme.palette.white) ||
    (props.bannerCol === 'transparent' && 'transparent')};

  padding: ${props => props.theme.spacing.standard};
  margin-bottom: 1em;
  border-left: 4px solid;
  border-color: ${props =>
    (props.borderCol === 'default' && props.theme.palette.primary) ||
    (props.borderCol === 'red' && props.theme.palette.primary) ||
    (props.borderCol === 'grey' && props.theme.palette.grey45) ||
    (props.borderCol === 'facebook-blue' && props.theme.palette.facebook) ||
    (props.borderCol === 'twitter-blue' && props.theme.palette.twitter) ||
    (props.borderCol === 'whatsapp-green' && props.theme.palette.whatsapp)};
`;

export const TextWrapper = styled(RichText)`
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
