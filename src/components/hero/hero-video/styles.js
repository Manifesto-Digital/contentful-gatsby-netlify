import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { breakpoint } from '../../theme/breakpoint';

export const VideoHero = styled.section`
  overflow: hidden;
  padding-top: 60vh;
  position: relative;
`;

export const VideoWrapper = styled.div``;

export const ImageFallback = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
`;

export const Video = styled(ReactPlayer)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleWrapper = styled.div`
  position: absolute;
  left: 50%;
  max-width: 520px;
  top: ${props => props.theme.spacing.xl};
  transform: translateX(-50%);
  width: 100%;
  padding: 0 ${props => props.theme.spacing.standard};
  text-align: center;
  color: ${props => props.theme.palette.white};
`;

export const Title = styled.h1`
  margin-bottom: 0;
  font-size: ${props => props.theme.headers.h1};

  ${breakpoint.tablet`
    font-size: ${props => props.theme.fontsize.hero};
  `}
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: ${props => props.theme.headers.h2};
`;

export const Red = styled.span`
  color: ${props => props.theme.palette.primary};
`;

export const HeroBanner = styled.div`
  background-color: ${props => props.theme.palette.overlay};
  bottom: 0;
  left: 0;
  padding: ${props => props.theme.spacing.standard};
  position: absolute;
  right: 0;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
`;

export const BannerText = styled.p`
  color: ${props => props.theme.palette.white};
  margin-right: ${props => props.theme.spacing.standard};
  margin-bottom: 0;
  padding-left: ${props => props.theme.spacing.standard};
  border-left: 3px solid ${props => props.theme.palette.white};
  white-space: pre-wrap;

  ${breakpoint.tablet`
    margin-right: ${props => props.theme.spacing.large};
  `}
`;

export const StickyBanner = styled.div`
  background-color: ${props => props.theme.palette.primary};
`;
