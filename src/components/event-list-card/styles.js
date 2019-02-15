import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';
import LinkHandler from '../link-handler';
import Image from '../image';

export const CardLink = styled(LinkHandler)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.pureBlack};
  font-weight: normal;
`;

export const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.standard};
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  border-radius: ${({ theme }) => theme.borderradius.small};
  display: flex;

  ${breakpoint.mobileLand`
    padding: ${({ theme }) => theme.spacing.small};    
  `};
`;

export const Thumbnail = styled(Image)`
  display: none;

  ${breakpoint.mobileLand`
    display: block;
    align-self: start;
    width: 50%;
  `};

  ${breakpoint.desktop`
    width: 35%;
  `};
`;

export const CardContent = styled.div`
  ${breakpoint.mobileLand`
    margin-left: ${({ theme }) => theme.spacing.standard};
  `};
`;

export const CardInfoList = styled.ul`
  padding: 0;
  list-style: none;
`;

export const CardInfo = styled.li`
  font-size: ${({ theme }) => theme.fontsize.small};
  margin: 0;
`;

export const InfoIcon = styled(SVG)`
  margin-right: ${({ theme }) => theme.spacing.small};
  display: inline-block;

  svg {
    height: ${({ theme }) => theme.fontsize.small};
    width: ${({ theme }) => theme.fontsize.small};
  }
`;
