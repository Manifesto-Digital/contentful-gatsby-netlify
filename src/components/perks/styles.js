import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large} 0;
  background-color: ${({ bg, theme }) =>
    (bg === 'black' && '#000000') || (bg === 'grey' && theme.palette.grey90)};
  color: ${({ theme }) => theme.palette.white};
`;

export const PerksList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${breakpoint.tablet`
    flex-wrap: nowrap;
  `};
`;

export const Perk = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  &:last-child {
    margin-bottom: 0;
  }

  ${breakpoint.tablet`
    width: auto;
    margin-bottom: 0;
    padding: ${({ theme }) => theme.spacing.small};
    flex-wrap: wrap;
    text-align: center;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  `};
`;

export const IconWrapper = styled(SVG)`
  width: 15%;
  margin-right: ${({ theme }) => theme.spacing.small};
  ${breakpoint.tablet`
    width: 75%;
    margin: 0 auto;
  `};
`;

export const Caption = styled.div`
  ${breakpoint.tablet`
    font-size: ${({ theme }) => theme.fontsize.small};
  `};

  ${breakpoint.desktop`
    font-size: ${({ theme }) => theme.fontsize.standard};
  `};
`;
