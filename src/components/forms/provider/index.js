import React from 'react';
import PropTypes from 'prop-types';

const FormContext = React.createContext();

export const Provider = ({ submitForm, children }) => (
  <FormContext.Provider value={submitForm}>{children}</FormContext.Provider>
);

Provider.propTypes = {
  submitForm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export const Consumer = ({ children }) => (
  <FormContext.Consumer>
    {submitForm => {
      if (!submitForm) {
        throw new Error(
          'You cannot use a form consumer without a corresponding provider'
        );
      }

      return children({ submitForm });
    }}
  </FormContext.Consumer>
);

Consumer.propTypes = {
  children: PropTypes.func,
};
