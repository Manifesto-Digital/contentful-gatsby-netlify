/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import {
  StyledDonateHero,
  StyledImage,
  StyledSliderBox,
  StyledTab,
  StyledTabContent,
  StyledTabList,
} from './styles';

const tabIds = ['single', 'monthly'];

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

const DonateHero = props => {
  const [selectedTabId, setSelectedTabId] = useState('single');

  // eslint-disable-next-line react/destructuring-assignment
  const selectedTab = props[selectedTabId];

  const [values, setValues] = useState({
    single: props.single.defaultAmount,
    monthly: props.monthly.defaultAmount,
  });

  const amount = selectedTab.amounts[values[selectedTabId]];

  // TODO: Supress error boundary warnings. See https://github.com/facebook/react/issues/11098
  // REVIEW: Possibly make this conditionally run during SSR.
  validateDefaultAmounts(props);

  return (
    <StyledDonateHero>
      <StyledImage {...amount.image} />

      <Container>
        <StyledSliderBox>
          <Tabs onSelect={index => setSelectedTabId(tabIds[index])}>
            <StyledTabList>
              <StyledTab>Give once</StyledTab>
              <StyledTab>Give monthly</StyledTab>
            </StyledTabList>

            {tabIds.map(tabId => (
              <TabPanel>
                <StyledTabContent>
                  <h2>Your donations make a difference</h2>
                  <p>{amount.description}</p>
                  <input
                    type="range"
                    step={10}
                    value={values[tabId]}
                    onChange={event => {
                      const value = Number.parseFloat(event.target.value);

                      setValues(oldValues => ({
                        ...oldValues,
                        [tabId]: value,
                      }));
                    }}
                  />
                </StyledTabContent>
              </TabPanel>
            ))}
          </Tabs>
        </StyledSliderBox>
      </Container>
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
