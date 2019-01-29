const possibleTextInputs = Object.freeze([
  'email',
  'text-field',
  'phone-number',
  'numeric',
]);

export const isTextField = fieldType => possibleTextInputs.includes(fieldType);

export const getTextInputType = fieldType => {
  if (fieldType === 'phone-number') return 'tel';
  if (fieldType === 'numeric') return 'number';
  if (fieldType === 'email') return fieldType;
  return 'text';
};
