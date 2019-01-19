import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {import('formik').FieldProps} props
 */
class FormFieldset extends React.Component {
  render() {
    const { children, legend, description } = this.props;
    let legendElement = null;
    let descriptionElement = null;

    if (legend) {
      legendElement = <legend>{legend}</legend>;
    }

    if (description) {
      descriptionElement = <div>{description}</div>;
    }

    return (
      <fieldset>
        {legendElement}
        {children}
        {descriptionElement}
      </fieldset>
    );
  }
}

FormFieldset.propTypes = {
  children: PropTypes.array,
  legend: PropTypes.string,
  description: PropTypes.string,
};

export default FormFieldset;
