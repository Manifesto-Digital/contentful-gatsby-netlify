import React from 'react';
import { snapshotComponent, mountWithTheme } from '../../../__tests__/helpers';
import DonationFormHandler from '.';
import Button from '../button';
import { createFactory } from '../../utils/test-factories';

// Default props
// eslint-disable-next-line react/prop-types
function FormExample({ handleAmountChange, setFieldValue, defaultValue }) {
  return (
    <div>
      <input
        type="text"
        placeholder={defaultValue.toString()}
        name="amount-holder"
        onChange={e => handleAmountChange(e, setFieldValue)}
      />
      <input type="submit" value="submit" />
    </div>
  );
}

it('renders correctly', () => {
  snapshotComponent(<DonationFormHandler render={FormExample} />);
});

it('has all the necessary fields', () => {
  const fieldNames = [
    'cid',
    'free_amount',
    'amount',
    'reserved_appeal_code',
    'frequency',
    'amount-holder',
  ];

  const wrapper = mountWithTheme(<DonationFormHandler render={FormExample} />);
  fieldNames.forEach(name => {
    expect(wrapper.find(`input[name="${name}"]`)).toHaveLength(1);
  });
});

it('has a default value set in amount field', () => {
  const wrapper = mountWithTheme(<DonationFormHandler render={FormExample} />);
  const hiddenInput = wrapper.find('input[name="amount"]');
  expect(parseInt(hiddenInput.props().value)).toBeGreaterThan(0);
});

it('updates the hidden amount field when visible donation amount field changes', () => {
  const wrapper = mountWithTheme(<DonationFormHandler render={FormExample} />);
  const visibleInput = wrapper.find('input[name="amount-holder"]');

  visibleInput.simulate('change', { target: { value: '25' } });

  const hiddenInput = wrapper.find('input[name="amount"]');
  // Expect the amount hidden field to be the pence value of the visible field
  expect(hiddenInput.props().value).toEqual((25 * 100).toString());
});

it('reverts to default value when visible input has no value', () => {
  const mockDefaultValue = 20;
  const wrapper = mountWithTheme(
    <DonationFormHandler
      defaultDonationValue={mockDefaultValue}
      render={FormExample}
    />
  );

  const visibleInput = wrapper.find('input[name="amount-holder"]');
  // Give visible input value then remove
  visibleInput.simulate('change', { target: { value: '25' } });
  visibleInput.simulate('change', { target: { value: '' } });

  const hiddenInput = wrapper.find('input[name="amount"]');
  // Expect the amount hidden field to have reverted back to the default
  expect(hiddenInput.props().value).toEqual(
    (mockDefaultValue * 100).toString()
  );
});

it('has the correct form method', () => {
  const wrapper = mountWithTheme(<DonationFormHandler render={FormExample} />);
  // Check method is GET
  expect(wrapper.find('form').props().method).toEqual('GET');
});

it('has the correct form action', () => {
  const wrapper = mountWithTheme(<DonationFormHandler render={FormExample} />);
  // Check the action URL is correct
  expect(wrapper.find('form').props().action).toEqual(
    'https://donate.shelter.org.uk/b'
  );
});

it('shows the placeholder based on prop', () => {
  const mockDefaultValue = 30;
  const wrapper = mountWithTheme(
    <DonationFormHandler
      defaultDonationValue={mockDefaultValue}
      render={FormExample}
    />
  );

  expect(
    wrapper.find('input[name="amount-holder"]').props().placeholder
  ).toEqual(mockDefaultValue.toString());
});

it('defaults frequency to single', () => {
  const wrapper = mountWithTheme(<DonationFormHandler render={FormExample} />);
  expect(wrapper.find(`input[name="frequency"]`).props().value).toEqual('once');
});

it('will set frequency to regular if passed in props', () => {
  const wrapper = mountWithTheme(
    <DonationFormHandler frequency="regular" render={FormExample} />
  );
  expect(wrapper.find(`input[name="frequency"]`).props().value).toEqual(
    'regular'
  );
});
