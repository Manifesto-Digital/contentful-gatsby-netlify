import React from 'react';
import { snapshotComponent, mountWithTheme } from '../../../__tests__/helpers';
import FeedbackForm from '.';
import LinkButton from '../link-button';
import { sendForm } from '../forms/send';

jest.mock('../forms/send');

afterEach(() => {
  sendForm.mockReset();
});

it('renders correctly', () => {
  snapshotComponent(<FeedbackForm heading="My Heading" />);
});

const nextTick = () => new Promise(resolve => process.nextTick(resolve));

const changeInput = (wrapper, value) => {
  const input = wrapper.getDOMNode();
  input.value = value;

  wrapper.simulate('change', {
    target: input,
    currentTarget: input,
  });
};

const submitFormElement = wrapper => {
  wrapper.simulate('submit');

  // form submission seems to happen asynchronously
  return nextTick();
};

it('sends form after typing into box and submitting', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  changeInput(wrapper.find('textarea'), 'Foo');
  await submitFormElement(wrapper.find('form'));

  expect(sendForm.mock.calls[0]).toEqual([
    'feedback',
    {
      comment: 'Foo',
    },
  ]);
});

it('displays thank you message when form submission succeeds', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  changeInput(wrapper.find('textarea'), 'Foo');
  await submitFormElement(wrapper.find('form'));

  wrapper.update();

  expect(wrapper.find('h3').text()).toBe('Thank you');
  expect(wrapper.find('p').text()).toBe(
    'Your feedback has been submitted to the team.'
  );
});

it('displays error message if submission fails', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  sendForm.mockReturnValue(Promise.reject(new Error()));

  changeInput(wrapper.find('textarea'), 'Foo');
  await submitFormElement(wrapper.find('form'));

  wrapper.update();

  expect(wrapper.find('h3').text()).toBe('Sorry');
  expect(wrapper.find('p').text()).toBe(
    'There was a problem with submitting your feedback.'
  );

  expect(wrapper.find(LinkButton).text()).toBe('Try again');
});

it('sends you back to form when clicking try again on failure page', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  sendForm.mockReturnValue(Promise.reject(new Error()));

  changeInput(wrapper.find('textarea'), 'Foo');
  await submitFormElement(wrapper.find('form'));

  wrapper.update();

  wrapper.find(LinkButton).simulate('click');

  expect(wrapper.find('h3').text()).toBe('My Heading');
});

it('does not allow submission if comment is empty', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  await submitFormElement(wrapper.find('form'));

  expect(sendForm).not.toHaveBeenCalled();
});
