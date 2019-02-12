import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Banner = styled.div`
  visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
  background-color: ${props => props.theme.palette.primary};
  padding: ${props => props.theme.spacing.standard} 0;
`;

export const BannerToStick = styled.div`
  position: fixed;
  display: ${props => (props.bannerStuck ? 'block' : 'none')};
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.palette.primary};
  padding: ${props => props.theme.spacing.standard} 0;

  ${({ bannerStuck, animateBanner }) =>
    bannerStuck &&
    animateBanner &&
    css`
      animation: ${fadeIn} 0.5s ease-out forwards;
    `};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
  color: ${props => props.theme.palette.white};
  padding: 0 ${props => props.theme.spacing.standard};
`;

export const EventName = styled.p`
  margin: 0 ${({ theme }) => theme.spacing.standard} 0 0;
`;
