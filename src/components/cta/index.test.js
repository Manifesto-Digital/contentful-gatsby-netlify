import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import CTA from './index';
import { StyledLinkHandler } from './styles';
import {
  createFactory,
  createInternalRef,
  createImage,
} from '../../utils/test-factories';
import { hidePascalCaseWarning } from '../../utils/test-mocks';

// Default props
export const createCTA = createFactory({
  buttonText: 'Button text',
  ctaColour: 'Red',
  link: createInternalRef(),
});

it('renders correctly', () => {
  const mockData = createCTA();

  snapshotComponent(<CTA {...CTA.fromCMS(mockData)} />);
});

hidePascalCaseWarning();

it('displays the correct text', () => {
  const mockData = createCTA({ buttonText: 'Mock button text' });
  const wrapper = shallow(<CTA {...CTA.fromCMS(mockData)} />);
  expect(wrapper.find(StyledLinkHandler).text()).toBe(mockData.buttonText);
});

it('displays an icon if provided', () => {
  const mockData = createCTA({ icon: createImage() });
  const wrapper = mountWithTheme(<CTA {...CTA.fromCMS(mockData)} />);
  expect(wrapper.find('img').prop('src')).toContain(mockData.icon.file.url);
});

it('displays width 100% if fullWidth is specified', () => {
  const mockData = createCTA();
  const wrapper = mountWithTheme(<CTA {...CTA.fromCMS(mockData)} fullWidth />);

  expect(wrapper).toHaveStyleRule('width', '100%');
});
