import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from '../form-elements/select-input';

const ReasonSelect = ({ initialValue, name }) => (
  <SelectInput
    field={{
      machineName: name,
      valueOptions: [
        {
          label: 'Please select a reason',
          value: initialValue,
          disabled: true,
        },
        {
          label: "I'm not sure what I need to do now",
          value: 'NotSureWhatNow',
        },
        {
          label: "It isn't detailed enough",
          value: 'NotDetailed',
        },
        {
          label: 'It is hard to understand',
          value: 'HardToUnderstand',
        },
        {
          label: 'The page is incorrect',
          value: 'Incorrect',
        },
        {
          label: 'It needs updating',
          value: 'NeedsUpdating',
        },
        {
          label: 'There is a broken link',
          value: 'BrokenLink',
        },
        {
          label: 'Other',
          value: 'Other',
        },
      ],
    }}
  />
);

ReasonSelect.propTypes = {
  initialValue: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default ReasonSelect;
