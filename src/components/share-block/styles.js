import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';
import { buttonReset } from '../styled/buttons';
import { linkStyles } from '../styled/links';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.standard};
  padding: 0 ${props => props.theme.spacing.standard};
  border: 2px solid ${props => props.theme.palette.royalBlue};

  ${breakpoint.gt.tablet`
    flex-direction: row;
    padding: 0 ${props => props.theme.spacing.medium};
  `}
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
`;

export const ShareLink = styled.a`
  ${buttonReset}
  ${linkStyles}
  display:flex;
  width: 100%;
  padding: ${props => props.theme.spacing.standard} 0;
  text-decoration: none;

  ${breakpoint.gt.tablet`
    width: auto;
    padding: ${props => props.theme.spacing.medium} 0;
  `}

  &:hover {
    color: ${props => props.theme.palette.primary};
    svg {
      fill: ${props => props.theme.palette.primary};
    }
  }
`;

export const StyledSVG = styled(SVG)`
  display: block;
  margin-right: ${props => props.theme.spacing.standard};
  fill: ${props => props.theme.palette.royalBlue};

  svg {
    width: 30px;
    height: 30px;
  }
`;
