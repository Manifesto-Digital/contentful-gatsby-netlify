import styled from 'styled-components';
import { Tab, TabList } from 'react-tabs';
import { removeListStyles } from '../styled/utils';
import Button from '../button';
import { breakpoint } from '../theme/breakpoint';
import { Container } from '../styled/containers';
import LinkButton from '../link-button';

export const Hero = styled.section`
  position: relative;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.large};

  ${breakpoint.desktop`
    height: 660px;
  `}
`;

export const ImageWrapper = styled.div`
  max-height: 200px;

  ${breakpoint.tablet`
    max-height: 300px;
  `};

  ${breakpoint.desktop`
    max-height: none;
  `}
`;

export const Image = styled.img`
  ${breakpoint.desktop`
    position: absolute;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 100%;
  `};
`;

export const SliderBox = styled.div`
  background: ${({ theme }) => theme.palette.grey15};
  position: relative;

  ${breakpoint.desktop`
    width: 55%;
    margin-top: ${({ theme }) => theme.spacing.xl};
  `}
`;

export const StyledTabList = styled(TabList)`
  ${removeListStyles};
  display: flex;
`;

export const StyledTab = styled(Tab).attrs({
  selectedClassName: 'is-selected',
})`
  flex: 1 1 0;
  padding: ${({ theme }) => theme.spacing.standard};
  text-align: center;

  &:not(.is-selected) {
    background: ${({ theme }) => theme.palette.offWhite};
    color: ${({ theme }) => theme.palette.grey60};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const TabContent = styled.section`
  padding: ${({ theme }) =>
    `${theme.spacing.standard} ${theme.spacing.standard}  ${
      theme.spacing.small
    } ${theme.spacing.standard}`};

  ${breakpoint.tablet`
  padding: ${({ theme }) =>
    `${theme.spacing.large} ${theme.spacing.large}  ${theme.spacing.standard} ${
      theme.spacing.large
    }`};


  `};
`;

export const StyledDonateButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

export const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  ${breakpoint.desktop`
    min-height: 3em;
  `}
`;

export const CollapsableArea = styled.div`
  max-height: ${({ collapsed }) => (collapsed ? '0' : '50px')};
  transition: max-height 0.2s ease-in-out;
  overflow: hidden;
`;

export const StyledContainer = styled(Container)`
  padding: 0;

  ${breakpoint.desktop`
    padding: 0 ${({ padding, theme }) =>
      padding === false ? 0 : theme.spacing.standard};
  `}
`;

export const OwnAmountButton = styled(LinkButton)`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

export const OwnAmountSubmit = styled(Button)`
  margin-left: ${({ theme }) => theme.spacing.small};
`;
