import React from 'react';
import {
  snapshotComponent,
  mountWithTheme,
  changeInput,
} from '../../../__tests__/helpers';
import FeedbackForm from '.';
import LinkButton from '../link-button';
import { sendForm } from '../form/send';
import Recaptcha from '../form-elements/recaptcha';

jest.mock('../form/send');
jest.mock('../form-elements/recaptcha');

afterEach(() => {
  sendForm.mockClear();
  Recaptcha.mockClear();
});

it('renders correctly', () => {
  snapshotComponent(<FeedbackForm heading="My Heading" />);
});

const verifyCaptcha = () => {
  Recaptcha.mock.calls[Recaptcha.mock.calls.length - 1][0].verifyCallback(
    'token'
  );
};

const nextTick = () => new Promise(resolve => process.nextTick(resolve));

const submitForm = wrapper => {
  wrapper.simulate('submit');

  // form submission seems to happen asynchronously
  return nextTick();
};

it('sends form data after passing validation & submitting', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  changeInput(wrapper.find('textarea'), 'Foo');
  verifyCaptcha();
  await submitForm(wrapper.find('form'));

  expect(sendForm.mock.calls[0]).toEqual([
    'feedback',
    {
      comment: 'Foo',
      recaptchaToken: 'token',
    },
  ]);
});

it('displays thank you message when form submission succeeds', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  changeInput(wrapper.find('textarea'), 'Foo');
  verifyCaptcha();
  await submitForm(wrapper.find('form'));

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
  verifyCaptcha();
  await submitForm(wrapper.find('form'));

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
  verifyCaptcha();
  await submitForm(wrapper.find('form'));

  wrapper.update();

  wrapper.find(LinkButton).simulate('click');

  expect(wrapper.find('h3').text()).toBe('My Heading');
});

it('does not allow submission if comment is empty', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  verifyCaptcha();
  await submitForm(wrapper.find('form'));

  expect(sendForm).not.toHaveBeenCalled();
});

it('does not allow submission if captcha is not verified', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);

  changeInput(wrapper.find('textarea'), 'Foo');
  await submitForm(wrapper.find('form'));

  expect(sendForm).not.toHaveBeenCalled();
});
