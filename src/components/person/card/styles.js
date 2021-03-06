import SVG from 'react-inlinesvg';
import styled from 'styled-components';
import { breakpoint } from '../../theme/breakpoint';
import Image from '../../image';

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  width: 100%;

  &:hover {
    box-shadow: ${({ hasLink, theme }) => hasLink && theme.boxshadow.standard};
  }

  ${breakpoint.desktop`
    margin-bottom: ${({ columns }) => columns && '0'};
    font-size: ${({ theme, columns }) => columns && theme.fontsize.small};
  `};
`;

export const Info = styled.div`
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.standard}`};
  flex: 1;

  ${breakpoint.mobileLand`
    width: 70%;
    margin-bottom: 0;
  `};
`;

export const Name = styled.h3`
  margin-bottom: 5px;
`;

export const JobTitle = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.2;
`;

export const StyledImage = styled(Image)`
  align-self: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  width: 100%;

  ${breakpoint.mobileLand`
    align-self: flex-start;
    margin-top:  ${({ theme }) => theme.spacing.small};
    width: 30%;
    margin-bottom: 0;
  `};
`;

export const ContactLine = styled.p`
  display: flex;
  word-break: break-word;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  line-height: 1;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ContactIcon = styled(SVG)`
  margin-right: ${({ theme }) => theme.spacing.small};

  svg {
    width: 18px;
    height: 18px;
  }
  path {
    fill: ${({ theme }) => theme.palette.primary};
  }
`;
