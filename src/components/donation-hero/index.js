import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { Tabs, TabPanel } from 'react-tabs';
import { formatDonationContent } from './helpers';
import ResponsiveImage from '../image/responsive';
import { StyledSlider, markStyle } from './slider';
import DonationForm from '../donation-form-handler';
import OwnAmount from './own-amount';
// Styles
import {
  Hero,
  Image,
  SliderBox,
  StyledTab,
  TabContent,
  StyledTabList,
  StyledDonateButton,
  Description,
  StyledContainer,
} from './styles';
import { VisuallyHidden } from '../styled/accessibility';

const getMarks = (activeTab, activeAmount) => {
  if (!activeTab) return false;

  const orderByAmountValue = () =>
    activeTab.sort((a, b) => {
      if (a.amount < b.amount) return -1;
      if (a.amount > b.amount) return 1;
      return 0;
    });

  const orderedArray = orderByAmountValue();
  const min = orderedArray[0].amount;
  const max = orderedArray[orderedArray.length - 1].amount;

  // Construct object to add the marks to the rc slider
  const marks = {};
  orderedArray.forEach(({ amount }) => {
    marks[amount] = {
      style: markStyle(amount === activeAmount),
      label: `£${amount}`,
    };
  });
  return { marks, min, max };
};

const DonateHero = ({ content }) => {
  const formattedValues = formatDonationContent(content);

  const tabIds = ['single', 'monthly'];

  // State for tab single / monthly
  const [selectedTabId, setSelectedTabId] = useState('single');
  // State values for slider
  const [activeOption, setActiveOption] = useState({
    single: formattedValues.single[2],
    monthly: formattedValues.monthly[2],
  });

  const {
    amount: activeAmount,
    image: activeImage,
    description: activeDescription,
  } = activeOption[selectedTabId];
  const frequency = selectedTabId === 'single' ? 'once' : 'regular';

  const onSliderChange = value => {
    // Check the option value chosen exists, arrow navigation currently
    // does not pass through a correct value to the event handler
    const chosenOption = formattedValues[selectedTabId].find(
      option => option.amount === value
    );
    if (chosenOption) {
      setActiveOption(currentValues => ({
        ...currentValues,
        [selectedTabId]: chosenOption,
      }));
    }
  };

  // Failsafe if there is an issue with retrieving the donation options
  if (!formattedValues) return null;

  return (
    <Hero>
      {tabIds.map(tabId =>
        formattedValues[tabId].map((option, i) => {
          if (tabId === selectedTabId && option.amount === activeAmount) {
            return (
              <Image
                as={ResponsiveImage}
                key={i}
                image={activeImage}
                mobileW={700}
                desktopW={1500}
                progressive
              />
            );
          }
          return null;
        })
      )}

      <StyledContainer>
        <SliderBox>
          <Tabs onSelect={index => setSelectedTabId(tabIds[index])}>
            <StyledTabList>
              <StyledTab>Give once</StyledTab>
              <StyledTab>Give monthly</StyledTab>
            </StyledTabList>

            {tabIds.map(tabId => {
              const activeTab = formattedValues[tabId];
              const { marks, min, max } = getMarks(activeTab, activeAmount);

              return (
                <TabPanel key={tabId}>
                  <TabContent>
                    <h2>Your donations make a difference</h2>
                    <Description>{activeDescription}</Description>
                    <DonationForm
                      defaultDonationValue={activeOption[selectedTabId].amount}
                      inline={false}
                      frequency={frequency}
                      id="donation-hero-form"
                      render={({ handleAmountChange, setFieldValue }) => (
                        <>
                          <VisuallyHidden as="label" htmlFor="amount-holder">
                            Donate
                          </VisuallyHidden>
                          <Field
                            component={StyledSlider}
                            min={min}
                            max={max}
                            name="amount-holder"
                            marks={marks}
                            step={null}
                            value={activeAmount}
                            onChange={value => {
                              onSliderChange(value);
                              handleAmountChange(false, setFieldValue, value);
                            }}
                          />
                          <StyledDonateButton
                            bg="donate"
                            type="submit"
                            fullWidth
                          >
                            Donate £{activeAmount}
                          </StyledDonateButton>
                        </>
                      )}
                    />
                    <OwnAmount frequency={frequency} />
                  </TabContent>
                </TabPanel>
              );
            })}
          </Tabs>
        </SliderBox>
      </StyledContainer>
    </Hero>
  );
};

DonateHero.propTypes = {
  content: PropTypes.shape({
    singleAmount1: PropTypes.number.isRequired,
    singleDescription1: PropTypes.string.isRequired,
    singleImage1: PropTypes.object.isRequired,
    singleAmount2: PropTypes.number.isRequired,
    singleDescription2: PropTypes.string.isRequired,
    singleImage2: PropTypes.object.isRequired,
    singleAmount3: PropTypes.number.isRequired,
    singleDescription3: PropTypes.string.isRequired,
    singleImage3: PropTypes.object.isRequired,
    singleAmount4: PropTypes.number.isRequired,
    singleDescription4: PropTypes.string.isRequired,
    singleImage4: PropTypes.object.isRequired,
    singleAmount5: PropTypes.number.isRequired,
    singleDescription5: PropTypes.string.isRequired,
    singleImage5: PropTypes.object.isRequired,
    monthlyAmount1: PropTypes.number.isRequired,
    monthlyDescription1: PropTypes.string.isRequired,
    monthlyImage1: PropTypes.object.isRequired,
    monthlyAmount2: PropTypes.number.isRequired,
    monthlyDescription2: PropTypes.string.isRequired,
    monthlyImage2: PropTypes.object.isRequired,
    monthlyAmount3: PropTypes.number.isRequired,
    monthlyDescription3: PropTypes.string.isRequired,
    monthlyImage3: PropTypes.object.isRequired,
    monthlyAmount4: PropTypes.number.isRequired,
    monthlyDescription4: PropTypes.string.isRequired,
    monthlyImage4: PropTypes.object.isRequired,
  }),
};

export default DonateHero;
