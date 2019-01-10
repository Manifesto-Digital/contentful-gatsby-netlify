import React from 'react';
import { Form, Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import { getQueryParams } from '../../utils/query-params';
// Components
import DonationInput from '../forms/donation-input';
// Styles
import { InlineForm } from './styles';
import Button from '../button';

const DonationForm = ({ placeholder }) => {
  const checkReservedCode = ({ search }) => {
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
    if (amountValue && amountValue.length > 0) {
      const amountInPennies = (amountValue * 100).toString();
      setFieldValue('amount', amountInPennies);
    } else {
      // Reset it back to default to ensure always set
      setFieldValue('amount', '3000');
    }
  };
  return (
    <Location>
      {({ location }) => (
        <Formik
          initialValues={{
            cid: '263',
            free_amount: '1',
            'amount-holder': '',
            amount: '3000',
            reserved_appeal_code: checkReservedCode(location),
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
              <Field
                name="amount-holder"
                render={props => (
                  <DonationInput
                    noMargin
                    inline
                    placeholder={placeholder ? placeholder.toString() : '30'}
                    {...props}
                    aria-label="Donate"
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
