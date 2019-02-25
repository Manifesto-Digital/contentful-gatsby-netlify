import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';
import ResponsiveImage from '../image/responsive';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.grey10};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) => theme.spacing.large} 0
    ${({ theme }) => theme.spacing.standard};

  ${breakpoint.tablet`
    padding: ${({ theme }) => theme.spacing.standard};
    flex-wrap: nowrap;
  `};
`;

export const Thumbnail = styled(ResponsiveImage)`
  align-self: start;

  ${breakpoint.tablet`
    order: 2;
    width: 50%;
  `};

  ${breakpoint.desktop`
    width: 66%;
  `};
`;

export const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.standard};

  ${breakpoint.tablet`
    padding: ${({ theme }) => theme.spacing.standard} ${({ theme }) =>
    theme.spacing.standard} 0 0;
    width: 50%;
  `};

  ${breakpoint.desktop`
    width: 34%;
  `};
`;

export const EventInfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EventInfo = styled.li`
  margin: 0;
`;

export const EventIcon = styled(SVG)`
  color: ${({ theme }) => theme.palette.primary};
  margin-right: ${({ theme }) => theme.spacing.small};
  display: inline-block;

  svg {
    height: ${({ theme }) => theme.fontsize.standard};
    width: ${({ theme }) => theme.fontsize.standard};
  }
`;
