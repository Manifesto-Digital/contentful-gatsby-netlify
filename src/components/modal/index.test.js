import React from 'react';
import ReactModal from 'react-modal';
import Modal from '.';
import { mountWithProviders } from '../../../__tests__/helpers';

const getCss = node =>
  window
    .getComputedStyle(node)
    .cssText.split(';')
    .join(';\n');

it('renders correct styles', () => {
  const { wrapper } = mountWithProviders(<Modal isOpen />);

  const { overlay, content } = wrapper.find(ReactModal).instance().portal;

  expect(getCss(overlay)).toMatchSnapshot('overlay');
  expect(getCss(content)).toMatchSnapshot('content');
});
