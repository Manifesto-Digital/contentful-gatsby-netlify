import styled from 'styled-components';
import Image from '../../image';
import { breakpoint } from '../../theme/breakpoint';

export const Wrapper = styled.section`
  padding-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${breakpoint.tablet`
    flex-wrap: nowrap;
  `};
`;

export const Content = styled.div`
  ${breakpoint.tablet`
    padding-right: ${({ theme }) => theme.spacing.standard};
  `};
`;
export const SubHeading = styled.p`
  font-size: ${({ theme }) => theme.headers.h3};

  span {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const HeroImage = styled.div`
  flex-shrink: 0;
  ${breakpoint.tablet`
    width: 50%;
    padding-left: ${({ theme }) => theme.spacing.standard};
  `};
  ${breakpoint.desktop`
    width: 30%;
  `};
`;

export const StyledImage = styled(Image)`
  flex-shrink: 0;
`;
