export const fieldsMap = fieldsToMap =>
  Object.keys(fieldsToMap).reduce((accum, key) => {
    const field = fieldsToMap[key];
    if (Object.prototype.hasOwnProperty.call(field, 'en-GB')) {
      accum[key] = flattenKey('en-GB', field); // eslint-disable-line no-use-before-define
    } else if (typeof field === 'object' && field !== null) {
      accum[key] = fieldsMap(field);
    } else {
      accum[key] = field;
    }
    return accum;
  }, {});

const flattenKey = (key, field) => {
  if (typeof field[key] === 'string' || typeof field[key] === 'boolean') {
    return field[key];
  }
  if (Array.isArray(field[key]) && field[key].length === 1) {
    return [fieldsMap(field[key][0].fields)];
  }
  if (typeof field[key] === 'object') {
    if (Object.prototype.hasOwnProperty.call(field[key], 'fields')) {
      return fieldsMap(field[key].fields);
    }

    return field[key];
  }

  return field;
};
