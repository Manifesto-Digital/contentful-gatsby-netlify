import styled from 'styled-components';
import { Tab, TabList } from 'react-tabs';
import { removeListStyles } from '../styled/utils';

export const StyledDonateHero = styled.section`
  height: 32rem;
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 100%;
`;

export const StyledSliderBox = styled.div`
  width: 70%;
  background: ${props => props.theme.palette.grey15};
  margin-top: 3rem;
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
