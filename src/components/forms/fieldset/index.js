import React from 'react';
import PropTypes from 'prop-types';
import { Fieldset, Description } from './styles';

const FormFieldset = ({ children, legend, description }) => (
  <Fieldset>
    {legend && <legend>{legend}</legend>}
    {children}
    {description && <Description>{description}</Description>}
  </Fieldset>
);

FormFieldset.propTypes = {
  children: PropTypes.array,
  legend: PropTypes.string,
  description: PropTypes.string,
};

export default FormFieldset;
