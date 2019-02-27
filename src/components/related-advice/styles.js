import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.large} 0;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${breakpoint.tablet`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

export const ListItem = styled.a`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  margin-right: ${({ theme }) => theme.spacing.standard};
  padding: ${({ theme }) => theme.spacing.standard};
  background: ${({ theme }) => theme.palette.black};
  border: 2px solid ${({ theme }) => theme.palette.black};
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontsize.standard};
  font-weight: 400;
  text-decoration: none;

  ${breakpoint.tablet`
    flex: 0 0 calc(${({ columns }) => 100 / columns}% - ${({ theme }) =>
    theme.spacing.standard});
  `};

  &:hover {
    background: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
  }
`;

export const ArrowSVG = styled(SVG)`
  display: block;
  align-self: center;
  fill: ${({ theme }) => theme.palette.white};
  flex-shrink: 0;
  width: 15px;
`;
