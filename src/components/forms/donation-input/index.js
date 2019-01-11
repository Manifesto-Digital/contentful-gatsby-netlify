import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, CurrencySymbol, Input } from './styles';

const DonationInput = ({ field, form, ...rest }) => (
  <Wrapper>
    <CurrencySymbol>£</CurrencySymbol>
    <Input
      type="number"
      {...field}
      {...rest}
      error={form.errors[field.name]}
      touched={form.touched[field.name]}
      pattern="[0-9]*"
    />
  </Wrapper>
);

DonationInput.propTypes = {
  field: PropTypes.object,
  inline: PropTypes.bool,
  noMargin: PropTypes.bool,
  fullWidth: PropTypes.bool,
  form: PropTypes.shape({
    errors: PropTypes.object,
    touched: PropTypes.object,
  }),
};

export default DonationInput;
