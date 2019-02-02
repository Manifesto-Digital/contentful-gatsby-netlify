import * as Yup from 'yup';
import { consistentString } from '../../utils/content-formatting';
import { sendEvent } from '../../utils/analytics';

const isMultipleCheckbox = field =>
  consistentString(field.fieldType) === 'checkboxes' &&
  field.defaultValue &&
  field.valueOptions.length > 1;

export const getInitialValues = (fields, hiddenInitialValues) => {
  const initialValues = hiddenInitialValues;

  // Loop through all fields to build an object to store initial values to pass to formik
  fields.forEach(field => {
    if (!field.fieldType) return;

    // Set default value to be the initial value for form
    if (field.internal.type === 'ContentfulTopicFormField') {
      initialValues[field.machineName] = field.defaultValue || '';
    }
    // Multiple checkboxes require an array of values
    if (isMultipleCheckbox(field)) {
      if (
        // Check if default value exists as an option
        field.valueOptions.some(option => option.value === field.defaultValue)
      ) {
        initialValues[field.machineName] = [field.defaultValue];
      } else {
        initialValues[field.machineName] = [];
      }
    }

    if (field.internal.type === 'ContentfulTopicFormFieldset') {
      getInitialValues(field.formFields);
    }
  });
  return initialValues;
};

export const getValidationSchema = formFields => {
  const validationSchema = {};

  // Loop through all form fields and build a Yup validationSchema object for formik
  formFields.forEach(field => {
    if (!field.fieldType) return;
    const fieldType = consistentString(field.fieldType);

    const fieldName = field.machineName;

    let validationType;
    // Apply a validation type to each field
    if (isMultipleCheckbox(field)) validationType = Yup.array();
    else if (fieldType === 'phone-number') {
      validationType = Yup.number().typeError('Please provide a valid number');
    } else if (fieldType === 'email') {
      validationType = Yup.string().email('Please provide a valid email');
    } else validationType = Yup.string();

    // Add required validation if specified
    if (field.required) validationType = validationType.required('Required');

    validationSchema[fieldName] = validationType;
  });

  return Yup.object().shape(validationSchema);
};

export const sendAnalyticsSubmissionEvent = (
  formValues,
  formFields,
  hiddenInitialValues
) => {
  // Get any fields that are marked to send to analytics and set bool
  const fieldsToSend = formFields.reduce((acc, field) => {
    if (!field.valueOptions) return acc;
    if (!field.valueOptions.some(option => option.sendToAnalytics)) return acc;

    if (field.valueOptions.length === 1) {
      // If only one option
      const option = field.valueOptions[0];
      const valueBool = formFields[field.machineName] === option.value;
      acc[option.value] = valueBool;
    } else {
      // If multiple options check if the option was selected
      field.valueOptions.forEach(option => {
        if (option.sendToAnalytics) {
          // Check if the field had a value
          const valueBool = formValues[field.machineName].includes(
            option.value
          );

          acc[option.value] = valueBool;
          return acc;
        }
      });
    }
    return acc;
  }, {});

  const analyticsObejctToSend = {
    event: 'formSubmitted',
    ...hiddenInitialValues,
    ...fieldsToSend,
  };

  sendEvent(analyticsObejctToSend);
};
