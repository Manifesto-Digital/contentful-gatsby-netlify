import React from 'react';
import ReactModal from 'react-modal';
import { act } from 'react-dom/test-utils';
import FeedbackModal from '.';
import { mountWithTheme } from 'test-helpers';

const isModalOpen = () =>
  document.body.classList.contains('ReactModal__Body--open');

it('renders linkText', () => {
  const wrapper = mountWithTheme(
    <FeedbackModal linkText="Open Me" heading="My Modal" />
  );

  try {
    expect(wrapper.find('button').text()).toBe('Open Me');
  } finally {
    // TODO: Automatically unmount enzyme wrappers
    wrapper.unmount();
  }
});

it('opens modal when link is clicked', () => {
  const wrapper = mountWithTheme(
    <FeedbackModal linkText="Open Me" heading="My Modal" />
  );

  try {
    act(() => {
      wrapper.find('button').simulate('click');
    });

    expect(isModalOpen()).toBe(true);
  } finally {
    // TODO: Automatically unmount enzyme wrappers
    wrapper.unmount();
  }
});

it('starts with modal closed', () => {
  const wrapper = mountWithTheme(
    <FeedbackModal linkText="Open Me" heading="My Modal" />
  );

  try {
    expect(isModalOpen()).toBe(false);
  } finally {
    // TODO: Automatically unmount enzyme wrappers
    wrapper.unmount();
  }
});

it('closes modal when a close is requested', () => {
  const wrapper = mountWithTheme(
    <FeedbackModal linkText="Open Me" heading="My Modal" />
  );

  try {
    act(() => {
      wrapper.find('button').simulate('click');
    });

    act(() => {
      const requestCloseHandler = wrapper
        .find(ReactModal)
        .prop('onRequestClose');
      requestCloseHandler();
    });

    expect(isModalOpen()).toBe(false);
  } finally {
    // TODO: Automatically unmount enzyme wrappers
    wrapper.unmount();
  }
});

it('displays heading in modal', () => {
  const wrapper = mountWithTheme(
    <FeedbackModal linkText="Open Me" heading="My Modal" />
  );

  try {
    act(() => {
      wrapper.find('button').simulate('click');
    });

    const { content } = wrapper.find(ReactModal).instance().portal;

    expect(content.querySelector('h3').textContent).toBe('My Modal');
  } finally {
    // TODO: Automatically unmount enzyme wrappers
    wrapper.unmount();
  }
});
