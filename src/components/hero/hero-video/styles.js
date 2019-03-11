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
  top: ${({ theme }) => theme.spacing.xl};
  transform: translateX(-50%);
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.standard};
  text-align: center;
  color: ${({ theme }) => theme.palette.white};
`;

export const Title = styled.h1`
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.headers.h1};

  ${breakpoint.tablet`
    font-size: ${({ theme }) => theme.fontsize.hero};
  `}
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.headers.h2};
`;

export const Red = styled.span`
  color: ${({ theme }) => theme.palette.primary};
`;

export const HeroBanner = styled.div`
  background-color: ${({ theme }) => theme.palette.overlay};
  bottom: 0;
  left: 0;
  padding: ${({ theme }) => theme.spacing.standard};
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
  color: ${({ theme }) => theme.palette.white};
  margin-right: ${({ theme }) => theme.spacing.standard};
  margin-bottom: 0;
  padding-left: ${({ theme }) => theme.spacing.standard};
  border-left: 3px solid ${({ theme }) => theme.palette.white};
  white-space: pre-wrap;

  ${breakpoint.tablet`
    margin-right: ${({ theme }) => theme.spacing.large};
  `}
`;

export const StickyBanner = styled.div`
  background-color: ${({ theme }) => theme.palette.primary};
`;
