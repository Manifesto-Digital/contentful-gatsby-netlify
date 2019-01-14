import React from 'react';
import { Form, Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import { getQueryParams } from '../../utils/query-params';
import { donation } from '../../variables';
// Components
import DonationInput from '../forms/donation-input';
// Styles
import { VisuallyHidden } from '../styled/accessibility';
import { InlineForm } from './styles';
import Button from '../button';

const DonationForm = ({ defaultDonationValue }) => {
  const defaultValue = defaultDonationValue || 30;
  const defaultPennyValue = defaultValue * 100;

  const getReservedAppealCode = ({ search }) => {
    const urlParams = getQueryParams(search);
    return urlParams.reserved_appeal_code || '';
  };

  // When the visible field updates, we also update the hidden amount field to the value in pence
  const handleAmountChange = (e, setFieldValue) => {
    const amountValue = e.target.value;
    const amountHolderName = e.target.name;

    // Update this field as normal
    setFieldValue(amountHolderName, amountValue);

    // Also update the actual hidden amount field if an amount has been set
    if (amountValue) {
      const amountInPennies = (amountValue * 100).toString();
      setFieldValue('amount', amountInPennies);
    } else {
      // Reset it back to default to ensure always set
      setFieldValue('amount', defaultPennyValue.toString());
    }
  };
  return (
    <Location>
      {({ location }) => (
        <Formik
          initialValues={{
            cid: donation.defaultEnglandCampaignId,
            free_amount: '1',
            'amount-holder': '',
            amount: defaultPennyValue.toString(),
            reserved_appeal_code: getReservedAppealCode(location),
            frequency: 'once',
          }}
        >
          {({ submitForm, setFieldValue }) => (
            <InlineForm
              as={Form}
              onSubmit={submitForm}
              action="https://donate.shelter.org.uk/b"
              method="GET"
            >
              <Field type="hidden" name="cid" />
              <Field type="hidden" name="free_amount" />
              <Field type="hidden" name="amount" />
              <Field type="hidden" name="reserved_appeal_code" />
              <Field type="hidden" name="frequency" />
              <VisuallyHidden as="label" htmlFor="amount-holder">
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
                    id="amount-holder"
                    onChange={e => handleAmountChange(e, setFieldValue)}
                  />
                )}
              />
              <Button bg="white outline" type="submit">
                Donate
              </Button>
            </InlineForm>
          )}
        </Formik>
      )}
    </Location>
  );
};

DonationForm.propTypes = {
  placeholder: PropTypes.number,
};

export default DonationForm;
