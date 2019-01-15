/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import { StyledSlider, markStyle } from './slider';
import { donation } from '../../variables';
import {
  StyledDonateHero,
  StyledImage,
  StyledSliderBox,
  StyledTab,
  StyledTabContent,
  StyledTabList,
  StyledDonateButton,
  StyledDescription,
  StyledCollapsableArea,
  StyledContainer,
  OwnAmountButton,
} from './styles';
import DonationForm from '../donation-form';

const tabIds = ['once', 'monthly'];

function validateDefaultAmounts(props) {
  tabIds.forEach(tabId => {
    const tab = props[tabId];

    if (!(tab.defaultAmount in tab.amounts)) {
      throw new Error(
        `Invalid default ${tabId} amount of £${
          tab.defaultAmount
        }. The default amount must correspond to one of the specified amounts.`
      );
    }
  });
}

const getMarks = (tab, activeValue) => {
  const values = Object.keys(tab.amounts).map(x => Number.parseInt(x));
  values.sort((a, b) => a - b);

  const marks = {};
  values.forEach(value => {
    marks[value] = {
      style: markStyle(value === activeValue),
      label: `£${value}`,
    };
  });

  const min = values[0];
  const max = values[values.length - 1];

  return { marks, min, max };
};

const getDonateUrl = (amount, frequency) =>
  `https://donate.shelter.org.uk/?cid=${
    donation.defaultEnglandCampaignId
  }&amount=${amount * 100}&frequency=${frequency}`;

const DonateHero = props => {
  const [selectedTabId, setSelectedTabId] = useState('once');

  // eslint-disable-next-line react/destructuring-assignment
  const selectedTab = props[selectedTabId];

  const [values, setValues] = useState({
    once: props.once.defaultAmount,
    monthly: props.monthly.defaultAmount,
  });

  const [collapsed, setCollapsed] = useState(true);

  const selectedAmount = selectedTab.amounts[values[selectedTabId]];

  // TODO: Supress error boundary warnings. See https://github.com/facebook/react/issues/11098
  // REVIEW: Possibly make this conditionally run during SSR.
  validateDefaultAmounts(props);

  return (
    <StyledDonateHero>
      <StyledImage {...selectedAmount.image} />

      <StyledContainer>
        <StyledSliderBox>
          <Tabs onSelect={index => setSelectedTabId(tabIds[index])}>
            <StyledTabList>
              <StyledTab>Give once</StyledTab>
              <StyledTab>Give monthly</StyledTab>
            </StyledTabList>

            {tabIds.map(tabId => {
              const tab = props[tabId];

              const currentValue = values[tabId];

              const { marks, min, max } = getMarks(tab, currentValue);

              return (
                <TabPanel key={tabId}>
                  <StyledTabContent>
                    <h2>Your donations make a difference</h2>
                    <StyledDescription>
                      {selectedAmount.description}
                    </StyledDescription>
                    <StyledSlider
                      min={min}
                      max={max}
                      marks={marks}
                      step={null}
                      value={currentValue}
                      onChange={value =>
                        setValues(oldValues => ({
                          ...oldValues,
                          [tabId]: value,
                        }))
                      }
                    />
                    <StyledDonateButton
                      externalUrl={getDonateUrl(currentValue, tabId)}
                    >
                      Donate £{currentValue}
                    </StyledDonateButton>

                    <OwnAmountButton
                      onClick={() =>
                        setCollapsed(oldCollapsed => !oldCollapsed)
                      }
                    >
                      Choose your own amount
                    </OwnAmountButton>

                    <StyledCollapsableArea collapsed={collapsed}>
                      <DonationForm buttonBg="donate" />
                    </StyledCollapsableArea>
                  </StyledTabContent>
                </TabPanel>
              );
            })}
          </Tabs>
        </StyledSliderBox>
      </StyledContainer>
    </StyledDonateHero>
  );
};

const imagePropTypes = PropTypes.shape({
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

const amountPropTypes = PropTypes.shape({
  image: imagePropTypes.isRequired,
  description: PropTypes.string.isRequired,
});

const tabPropTypes = PropTypes.shape({
  defaultAmount: PropTypes.number.isRequired,
  amounts: PropTypes.objectOf(amountPropTypes).isRequired,
});

DonateHero.propTypes = {
  monthly: tabPropTypes.isRequired,
  single: tabPropTypes.isRequired,
};

export default DonateHero;
