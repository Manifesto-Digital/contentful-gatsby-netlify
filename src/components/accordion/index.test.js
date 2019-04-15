import React from 'react';
import { act } from 'react-dom/test-utils';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import Accordion from '.';
import { HeadingButton, Content } from './styles';
import { createFactory } from '../../utils/test-factories';

export const createAccordion = createFactory({
  id: 'ID123',
  active: true,
  header: 'mock header',
  children: (
    <p>
      Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id
      egestas quam mauris ut lacus.
    </p>
  ),
});

it('renders correctly', () => {
  const mockData = createAccordion();
  snapshotComponent(<Accordion {...mockData} />);
});

it('is hidden and shows the correct aria attributes', () => {
  const mockData = createAccordion({ id: 'mockID' });
  const wrapper = mountWithTheme(<Accordion {...mockData} />);

  expect(wrapper.find(Content)).toHaveStyleRule('display', 'none');
  expect(wrapper.find(HeadingButton).prop('aria-controls')).toEqual(
    mockData.id
  );
  expect(wrapper.find(HeadingButton).prop('aria-expanded')).toEqual(false);
  expect(wrapper.find(Content).prop('aria-hidden')).toEqual(true);
});

it('opens and updates aria on click', () => {
  const mockData = createAccordion();
  const wrapper = mountWithTheme(<Accordion {...mockData} />);

  act(() => {
    wrapper.find(HeadingButton).simulate('click');
  });
  wrapper.update();
  expect(wrapper.find(Content)).toHaveStyleRule('display', 'block');
  expect(wrapper.find(HeadingButton).prop('aria-controls')).toEqual(
    mockData.id
  );
  expect(wrapper.find(HeadingButton).prop('aria-expanded')).toEqual(true);
  expect(wrapper.find(Content).prop('aria-hidden')).toEqual(false);
});
