import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, CurrencySymbol, Input } from './styles';

/**
 * Renders
 *
 * @param {import('formik').FieldProps} props
 */
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
      data-default-amount="30"
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
