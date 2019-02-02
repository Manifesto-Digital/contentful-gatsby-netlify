import React from 'react';
import { shallow } from 'enzyme';
import SelectInput from '.';
import { mountWithTheme } from '../../../../__tests__/helpers';
import { FormikWrapper } from '../../../utils/test-form-wrapper';
import { selectField } from '../../../utils/test-form-factories';
import { createFactory } from '../../../utils/test-factories';

const createFieldProps = createFactory(selectField());

it('check that select input renders with correct options', () => {
  const mockProps = createFieldProps({
    machineName: 'selectTitle',
    valueOptions: [
      {
        value: 'mrs',
        label: 'Mrs',
      },
      {
        value: 'miss',
        label: 'Miss',
      },
      {
        value: 'master',
        label: 'Master',
      },
      {
        value: 'mr',
        label: 'Mr',
      },
    ],
  });

  const wrapper = shallow(<SelectInput field={mockProps} />);

  mockProps.valueOptions.forEach((option, i) => {
    expect(
      wrapper
        .find('option')
        .at(i)
        .props().value
    ).toEqual(option.value);
    expect(
      wrapper
        .find('option')
        .at(i)
        .text()
    ).toEqual(option.label);
  });
});
