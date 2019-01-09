import React from 'react';
import TextInput from '.';
import {
  mountWithProviders,
  snapshotComponent,
} from '../../../../__tests__/helpers';

const createProps = (name, error, touched) => ({
  field: { name },
  form: {
    errors: { [name]: error },
    touched: { [name]: touched },
  },
});

['text', 'number', 'tel'].forEach(type => {
  it(`renders type as ${type}`, () => {
    const props = createProps('foo', undefined, false);

    const { wrapper } = mountWithProviders(
      <TextInput type={type} {...props} />
    );

    expect(wrapper.getDOMNode().getAttribute('type')).toBe(type);
  });
});

it('displays neutral state if not touched', () => {
  snapshotComponent(
    <TextInput {...createProps('foo', 'some error', false)} />,
    'with error'
  );
  snapshotComponent(
    <TextInput {...createProps('foo', undefined, false)} />,
    'no error'
  );
});

it('displays success if valid & touched', () => {
  const props = createProps('foo', undefined, true);

  snapshotComponent(<TextInput {...props} />);
});

it('displays error if invalid & touched', () => {
  const props = createProps('foo', 'Field is required', true);

  snapshotComponent(<TextInput {...props} />);
});

it('renders as textarea if type is textarea', () => {
  const props = createProps('foo', 'Field is required', true);

  const { wrapper } = mountWithProviders(
    <TextInput type="textarea" {...props} />
  );

  expect(wrapper.getDOMNode().nodeName).toBe('TEXTAREA');
});
