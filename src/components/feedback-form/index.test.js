import React from 'react';
import {
  snapshotComponent,
  mountWithProviders,
} from '../../../__tests__/helpers';
import FeedbackForm from '.';

it('renders correctly', () => {
  snapshotComponent(<FeedbackForm />);
});

const nextTick = () => new Promise(resolve => process.nextTick(resolve));

it('sends form after typing into box and submitting', async () => {
  const { wrapper, submitForm } = mountWithProviders(<FeedbackForm />);

  const textarea = wrapper.find('textarea').getDOMNode();
  textarea.value = 'Foo';

  wrapper.find('textarea').simulate('change', {
    target: textarea,
    currentTarget: textarea,
  });

  wrapper.find('form').simulate('submit');

  // form submission seems to happen asynchronously
  await nextTick();

  expect(submitForm.mock.calls[0]).toEqual([
    'feedback',
    {
      comment: 'Foo',
    },
  ]);
});
