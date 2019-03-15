import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../../__tests__/helpers';
import StickyBanner from '.';
import {
  createFactory,
  createTestRef,
  createExternalRef,
  createInternalRef,
} from '../../../utils/test-factories';
import { SignUpLink } from '../../styled/buttons';
import { BannerToStick } from './styles';

const createStickyBanner = createFactory({
  title: 'Title',
  subtitle: 'Subtitle',
  bannerStuck: false,
  animateBanner: false,
  eventLink: createExternalRef(),
  buttonText: 'Button text',
  StickyBannerRef: createTestRef(),
});

it('renders correctly', () => {
  const mockData = createStickyBanner();
  snapshotComponent(<StickyBanner {...mockData} />);
});

it('displays the banner text', () => {
  const mockData = createStickyBanner({
    title: 'New title',
    subTitle: 'New subtitle',
  });
  const wrapper = shallow(<StickyBanner {...mockData} />);
  expect(wrapper.text()).toContain(mockData.title);
  expect(wrapper.text()).toContain(mockData.subtitle);
});

it('renders a signup button with an event link', () => {
  const mockData = createStickyBanner({
    eventLink: createInternalRef({ slug: '/slug' }),
  });
  const wrapper = shallow(<StickyBanner {...mockData} />);

  wrapper.find(SignUpLink).forEach(button => {
    expect(button.prop('link')).toEqual(mockData.eventLink);
  });
});

it('sets fixed if bannerStuck is passed', () => {
  const mockData = createStickyBanner({
    bannerStuck: false,
  });
  const wrapper = mountWithTheme(<StickyBanner {...mockData} />);
  expect(wrapper.find(BannerToStick)).toHaveStyleRule('display', 'none');

  const updatedData = createStickyBanner({
    bannerStuck: true,
  });
  const updatedWrapper = mountWithTheme(<StickyBanner {...updatedData} />);

  expect(updatedWrapper.find(BannerToStick)).toHaveStyleRule(
    'position',
    'fixed'
  );
  expect(updatedWrapper.find(BannerToStick)).toHaveStyleRule(
    'display',
    'block'
  );
});
