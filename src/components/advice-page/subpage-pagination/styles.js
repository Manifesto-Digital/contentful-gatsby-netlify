import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledLink = styled.a`
  text-decoration: none;
  margin-right: ${props => (props.type === 'prev' ? 'auto' : null)};
  margin-left: ${props => (props.type === 'next' ? 'auto' : null)};

  span {
    text-decoration: underline;
    font-weight: normal;
  }
`;

export const DirectionIcon = styled.div`
  display: flex;
  flex-direction: ${props => (props.type === 'prev' ? 'row-reverse' : 'row')};
  justify-content: flex-end;
  font-size: ${props => props.theme.fontsize.larger};
  margin: 0 0 0.4em;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing.large};
  padding-bottom: ${props => props.theme.spacing.large};
  border-bottom: 2px solid ${props => props.theme.palette.offWhite};
`;

export const StyledSVG = styled(SVG)`
  svg {
    display: block;
    width: 35px;
    height: 40px;
  }
`;
