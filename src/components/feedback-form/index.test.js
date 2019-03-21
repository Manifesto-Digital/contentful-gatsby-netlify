import React from 'react';
import { act } from 'react-dom/test-utils';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
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
  act(() => {
    wrapper.find('button[type="submit"]').simulate('submit');
  });
  // form submission seems to happen asynchronously
  return nextTick();
};

it('shows comment, reason and rating fields when helpful radio buttons are set to "no" or "but"', () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);
  const radioQuestion = () => wrapper.find('input[name="helpful"]').at(0);

  expect(wrapper.find('select[name="reason"]')).toHaveLength(0);
  expect(wrapper.find('textarea[name="comment"]')).toHaveLength(0);
  expect(wrapper.find('input[name="netpromoterscore"]')).toHaveLength(0);
  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'No',
      name: 'helpful',
    },
  });
  expect(wrapper.find('select[name="reason"]')).toHaveLength(1);
  expect(wrapper.find('textarea[name="comment"]')).toHaveLength(1);
  expect(wrapper.find('input[name="netpromoterscore"]').length).toBeGreaterThan(
    0
  );

  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'YesBut',
      name: 'helpful',
    },
  });

  expect(wrapper.find('select[name="reason"]')).toHaveLength(1);
  expect(wrapper.find('textarea[name="comment"]')).toHaveLength(1);
  expect(wrapper.find('input[name="netpromoterscore"]').length).toBeGreaterThan(
    0
  );
});

it('shows only rating fields when user answers "yes" to is page helpful', () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);
  const radioQuestion = () => wrapper.find('input[name="helpful"]').at(0);

  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'Yes',
      name: 'helpful',
    },
  });
  expect(wrapper.find('select[name="reason"]')).toHaveLength(0);
  expect(wrapper.find('textarea[name="comment"]')).toHaveLength(0);
  expect(wrapper.find('input[name="netpromoterscore"]').length).toBeGreaterThan(
    0
  );
});

it('sends form data after passing validation & submitting', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);
  const radioQuestion = () => wrapper.find('input[name="helpful"]').at(0);

  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'No',
      name: 'helpful',
    },
  });

  wrapper.find('textarea').simulate('change', {
    target: {
      value: 'Foo',
      name: 'comment',
    },
  });

  verifyCaptcha();

  await submitForm(wrapper);
  wrapper.update();

  expect(sendForm.mock.calls[0]).toEqual([
    'feedback',
    {
      comment: 'Foo',
      helpful: 'No',
      recaptchaToken: 'token',
      netpromoterscore: '7',
      reason: 'selectReason',
    },
  ]);
});

it('displays thank you message when form submission succeeds', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);
  const radioQuestion = () => wrapper.find('input[name="helpful"]').at(0);

  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'No',
      name: 'helpful',
    },
  });

  wrapper.find('textarea').simulate('change', {
    target: {
      value: 'Foo',
      name: 'comment',
    },
  });
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
  const radioQuestion = () => wrapper.find('input[name="helpful"]').at(0);

  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'No',
      name: 'helpful',
    },
  });

  wrapper.find('textarea').simulate('change', {
    target: {
      value: 'Foo',
      name: 'comment',
    },
  });
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

  const radioQuestion = () => wrapper.find('input[name="helpful"]').at(0);

  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'No',
      name: 'helpful',
    },
  });

  wrapper.find('textarea').simulate('change', {
    target: {
      value: 'Foo',
      name: 'comment',
    },
  });
  verifyCaptcha();
  await submitForm(wrapper.find('form'));
  wrapper.update();

  wrapper.find(LinkButton).simulate('click');

  expect(wrapper.find('h3').text()).toBe('My Heading');
});

it('does not allow submission if captcha is not verified', async () => {
  const wrapper = mountWithTheme(<FeedbackForm heading="My Heading" />);
  const radioQuestion = () => wrapper.find('input[name="helpful"]').at(0);

  radioQuestion().simulate('change', {
    target: {
      checked: true,
      value: 'No',
      name: 'helpful',
    },
  });

  wrapper.find('textarea').simulate('change', {
    target: {
      value: 'Foo',
      name: 'comment',
    },
  });
  await submitForm(wrapper.find('form'));
  wrapper.update();

  expect(sendForm).not.toHaveBeenCalled();
});
