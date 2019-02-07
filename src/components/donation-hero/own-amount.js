/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import DonationForm from '../donation-form-handler';
import DonationInput from '../form-elements/donation-input';
// Styles
import { CollapsableArea, OwnAmountButton, OwnAmountSubmit } from './styles';
import Button from '../button';
import { VisuallyHidden } from '../styled/accessibility';

const OwnAmount = ({ frequency }) => {
  // State for other amount option
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <OwnAmountButton
        onClick={() => setCollapsed(oldCollapsed => !oldCollapsed)}
      >
        Choose your own amount
      </OwnAmountButton>
      <CollapsableArea collapsed={collapsed}>
        <DonationForm
          frequency={frequency}
          id="donation-hero-own-amount-form"
          render={({ handleAmountChange, setFieldValue, defaultValue }) => (
            <>
              <VisuallyHidden as="label" htmlFor="amount-holder-other-amount">
                Donate
              </VisuallyHidden>
              <Field
                name="amount-holder"
                render={props => (
                  <DonationInput
                    noMargin
                    inline
                    placeholder={defaultValue.toString()}
                    {...props}
                    id="amount-holder-other-amount"
                    onChange={e => handleAmountChange(e, setFieldValue)}
                  />
                )}
              />
              <OwnAmountSubmit as={Button} bg="donate" type="submit">
                Donate
              </OwnAmountSubmit>
            </>
          )}
        />
      </CollapsableArea>
    </>
  );
};

OwnAmount.propTypes = {
  frequency: PropTypes.oneOf(['once', 'regular']),
};

export default OwnAmount;
