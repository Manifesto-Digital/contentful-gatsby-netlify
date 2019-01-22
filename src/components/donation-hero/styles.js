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

  ${breakpoint.desktop`
    height: 34rem;
  `}
`;

export const ImageWrapper = styled.div`
  max-height: 15rem;

  ${breakpoint.tablet`
      max-height: 20rem;
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
  background: ${props => props.theme.palette.grey15};
  position: relative;

  ${breakpoint.desktop`
    width: 70%;
    margin-top: 3rem;
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

export const TabContent = styled.section`
  padding: ${props => props.theme.spacing.standard};

  ${breakpoint.tablet`
    padding: ${props => props.theme.spacing.large};

  `};
`;

export const StyledDonateButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.standard};
`;

export const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.standard};
`;

export const CollapsableArea = styled.div`
  max-height: ${props => (props.collapsed ? '0' : '5rem')};
  transition: max-height 0.2s ease-in-out;
  overflow: hidden;
`;

export const StyledContainer = styled(Container)`
  padding: 0;

  ${breakpoint.desktop`
    padding: 0
    ${props => (props.padding === false ? 0 : props.theme.spacing.standard)};
  `}
`;

export const OwnAmountButton = styled(LinkButton)`
  display: block;
  margin-bottom: ${props => props.theme.spacing.standard};
`;

export const OwnAmountSubmit = styled(Button)`
  margin-left: ${props => props.theme.spacing.small};
`;
