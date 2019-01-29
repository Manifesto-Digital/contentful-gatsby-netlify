import * as Yup from 'yup';
import { consistentString } from '../../utils/content-formatting';

const isMultipleCheckbox = field =>
  consistentString(field.fieldType) === 'checkboxes' &&
  field.defaultValue &&
  field.valueOptions.length > 1;

export const getInitialValues = (fields, hiddenInitialValues) => {
  const initialValues = hiddenInitialValues;
  fields.forEach(field => {
    if (!field.fieldType) return;

    if (field.fieldType === 'Address') return;
    if (field.internal.type === 'ContentfulTopicFormField') {
      if (field.defaultValue) {
        initialValues[field.machineName] = field.defaultValue;
      } else {
        initialValues[field.machineName] = '';
      }
    }
    // Multiple checkboxes require an array of values
    if (isMultipleCheckbox(field)) {
      initialValues[field.machineName] = field.defaultValue
        ? [field.defaultValue]
        : [];
    }
    if (field.internal.type === 'ContentfulTopicFormFieldset') {
      getInitialValues(field.formFields);
    }
  });
  return initialValues;
};

export const getValidationSchema = formFields => {
  const validationSchema = {};
  const requiredMessage = 'Required';

  formFields.forEach(field => {
    if (!field.fieldType) return;

    if (field.fieldType === 'Address') return;
    const fieldName = field.machineName;

    if (isMultipleCheckbox(field)) {
      if (field.required) {
        validationSchema[fieldName] = Yup.array().required(requiredMessage);
      } else {
        validationSchema[fieldName] = Yup.array();
      }
    } else if (field.required) {
      console.log('requireeeeed', field);

      validationSchema[fieldName] = Yup.string().required(requiredMessage);
    } else {
      validationSchema[fieldName] = Yup.string();
    }
  });

  return Yup.object().shape(validationSchema);
};
