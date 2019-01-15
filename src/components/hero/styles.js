import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';
import { absoluteCenter } from '../styled/utils';
import LinkHandler from '../link-handler';

export const HeroNoCard = styled.section`
  width: 100vw;
  position: relative;
  overflow: hidden;
  padding-top: 350px;
  margin-bottom: ${props => props.theme.spacing.large};

  ${breakpoint.gt.tablet`
    padding-top: 60vh;
`};
`;

export const HeroWithCard = styled.section`
  width: 100vw;
  position: relative;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.large};

  ${breakpoint.gt.tablet`
    padding-top: 3em;
  `}
  ${breakpoint.gt.desktop`
    padding-top: 10em;
  `}
`;

export const CenteredMedia = styled.div`
  ${absoluteCenter};
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    ${absoluteCenter};
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    height: 350px;
    max-width: none;

    ${breakpoint.gt.tablet`
        height: auto;
    `};
  }
`;

export const WithCardMedia = styled.div`
  img {
    min-width: 100%;
    ${breakpoint.gt.tablet`
      height: auto;
      ${absoluteCenter};
    `};
  }
`;

export const CenteredContent = styled.div`
  ${absoluteCenter};
  text-align: center;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.standard};
  color: ${props =>
    props.black
      ? `${props.theme.palette.black}`
      : `${props.theme.palette.white}`};
`;

export const CardContent = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 60em;
  padding: 1em 1em 0;
  position: relative;
  width: 100%;
  background: hsla(0, 0%, 100%, 0.9);

  ${breakpoint.gt.tablet` 
    float: ${props => (props.position === 'right' ? 'right' : 'left')};
    margin-bottom: 3em;
    width: 65%;
    padding-bottom: 1em;
  `};

  ${breakpoint.gt.desktop`
    width: 55%;
    margin-bottom: 7em;
  `};
`;
export const Title = styled.h1`
  margin-bottom: 0;
`;
export const Subtitle = styled.p`
  font-size: ${props => props.theme.headers.h2};
  margin-bottom: 0;
`;
export const CardSubtitle = styled.p`
  margin-bottom: ${props => props.theme.spacing.small};
  margin-top: ${props => props.theme.spacing.small};
`;
export const StyledLinkHandler = styled(LinkHandler)`
  &:hover {
    color: ${props => props.theme.palette.primary};
  }
`;
