import styled from 'styled-components';
import { Tab, TabList } from 'react-tabs';
import { removeListStyles } from '../styled/utils';
import CTA from '../cta';
import { breakpoint } from '../theme/breakpoint';
import { Container } from '../styled/containers';
import LinkButton from '../link-button';

export const StyledDonateHero = styled.section`
  ${breakpoint.gt.desktop`
    height: 34rem;
  `}
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  ${breakpoint.gt.desktop`
    position: absolute;
    height: 100%;
    // TODO: Make this work in IE11
    object-fit: cover;
  `}
  width: 100%;
`;

export const StyledSliderBox = styled.div`
  ${breakpoint.gt.desktop`
    width: 70%;
    margin-top: 3rem;
  `}
  background: ${props => props.theme.palette.grey15};
  position: relative;
`;

export const StyledTabList = styled(TabList)`
  ${removeListStyles};
  display: flex;
`;

export const StyledTab = styled(Tab).attrs({
  selectedClassName: 'is-selected',
})`
  flex: 1 1 0;
  padding: ${props => props.theme.spacing.standard};
  text-align: center;

  &:not(.is-selected) {
    background: ${props => props.theme.palette.offWhite};
    color: ${props => props.theme.palette.grey60};
  }

  &:hover {
    color: ${props => props.theme.palette.primary};
  }
`;

export const StyledTabContent = styled.section`
  padding: ${props => props.theme.spacing.large};
`;

export const StyledDonateButton = styled(CTA).attrs({
  bg: 'donate',
  fullWidth: true,
})`
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const StyledDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const StyledCollapsableArea = styled.div`
  max-height: ${props => (props.collapsed ? '0' : '5rem')};
  transition: max-height 0.2s ease-in-out;
  overflow: hidden;
`;

export const StyledContainer = styled(Container)`
  ${breakpoint.lt.desktop`
    padding: 0;
    max-width: none;
  `}
`;

export const OwnAmountButton = styled(LinkButton)`
  display: block;
  margin-bottom: ${props => props.theme.spacing.standard};
`;
