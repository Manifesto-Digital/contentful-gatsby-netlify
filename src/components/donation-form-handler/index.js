import React from 'react';
import { Form, Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';
import { getQueryParams } from '../../utils/query-params';
import { donation } from '../../variables';
// Styles
import { StyledForm } from './styles';

const DonationFormHandler = ({
  defaultDonationValue,
  className,
  render,
  frequency,
  inline,
  id,
}) => {
  const defaultValue = defaultDonationValue || 30;
  const defaultPennyValue = defaultValue * 100;

  const getReservedAppealCode = ({ search }) => {
    const urlParams = getQueryParams(search);
    return urlParams.reserved_appeal_code || '';
  };

  // When the visible field updates, we also update the hidden amount field to the value in pence
  const handleAmountChange = (e, setFieldValue, value = null) => {
    // Necessary as RC slider in the donation hero doesn't pass event on change
    // so we have to explicitly pass through name and value
    let amountValue;
    if (e) {
      amountValue = e.target.value;
    } else {
      amountValue = value;
    }

    // Update this field as normal
    setFieldValue('amount-holder', amountValue);

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
          onSubmit={() => {}} // Required to prevent submission error
          initialValues={{
            cid: donation.defaultEnglandCampaignId,
            free_amount: '1',
            'amount-holder': '',
            amount: defaultPennyValue.toString(),
            reserved_appeal_code: getReservedAppealCode(location),
            frequency,
          }}
        >
          {({ submitForm, setFieldValue }) => (
            <StyledForm
              inline={inline ? 1 : 0}
              as={Form}
              onSubmit={submitForm}
              action="https://donate.shelter.org.uk/b"
              method="GET"
              className={className}
              id={id || null}
            >
              <Field type="hidden" name="cid" />
              <Field type="hidden" name="free_amount" />
              <Field type="hidden" name="amount" />
              <Field type="hidden" name="reserved_appeal_code" />
              <Field type="hidden" name="frequency" />
              {render({ handleAmountChange, setFieldValue, defaultValue })}
            </StyledForm>
          )}
        </Formik>
      )}
    </Location>
  );
};

DonationFormHandler.propTypes = {
  className: PropTypes.string,
  defaultDonationValue: PropTypes.number,
  render: PropTypes.func.isRequired,
  frequency: PropTypes.oneOf(['once', 'regular']),
  inline: PropTypes.bool,
  id: PropTypes.string,
};

DonationFormHandler.defaultProps = {
  frequency: 'once',
  inline: true,
};

export default DonationFormHandler;
