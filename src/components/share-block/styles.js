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
  padding: ${props => props.theme.spacing.standard};
  border: 2px solid ${props => props.theme.palette.royalBlue};

  ${breakpoint.tablet`
    flex-direction: row;
    padding: ${props => props.theme.spacing.medium};
  `}
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.small};

  &:hover {
    a,
    svg {
      color: ${props => props.theme.palette.primary};
      fill: ${props => props.theme.palette.primary};
    }
  }

  ${breakpoint.tablet`
    margin-bottom: 0;
  `}
`;

export const PrintButton = styled.button`
  ${buttonReset}
  ${linkStyles}
  display:flex;
  text-decoration: none;
`;

export const ShareLink = styled.a`
  display: flex;
  text-decoration: none;
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
