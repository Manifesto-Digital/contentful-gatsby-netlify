import styled from 'styled-components';
import SVG from 'react-inlinesvg';

export const StyledLink = styled.a`
  text-decoration: none;
  margin-right: ${({ type }) => (type === 'prev' ? 'auto' : null)};
  margin-left: ${({ type }) => (type === 'next' ? 'auto' : null)};

  span {
    text-decoration: underline;
    font-weight: normal;
  }
`;

export const DirectionIcon = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === 'prev' ? 'row-reverse' : 'row')};
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.fontsize.larger};
  margin: 0 0 0.4em;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  padding-bottom: ${({ theme }) => theme.spacing.large};
  border-bottom: 2px solid ${({ theme }) => theme.palette.offWhite};
`;

export const StyledSVG = styled(SVG)`
  svg {
    display: block;
    width: 35px;
    height: 40px;
  }
`;
