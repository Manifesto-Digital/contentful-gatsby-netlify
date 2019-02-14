import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../../__tests__/helpers';
import StickyBanner from '.';
import { createFactory, createTestRef } from '../../../utils/test-factories';
import { SignUpButton } from '../../styled/buttons';
import { BannerToStick } from './styles';

const createStickyBanner = createFactory({
  title: 'Title',
  subtitle: 'Subtitle',
  bannerStuck: false,
  animateBanner: false,
  eventLink:
    'https://endurancecui.active.com/new/events/57227451/select-race?_p=9778819554116866&e4q=b4c582fe-43bc-41b0-8df3-221750f7842b&e4p=98898649-9a90-47cc-a977-0197a099719b&e4ts=1538665644&e4c=active&e4e=snawe00000000&e4rt=Safetynet&e4h=a74b16f1d10ebeed229cf4c8311a6f08&_ga=2.193888045.1618800628.1549375348-1259773413.1541001577',
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
    eventLink:
      'https://endurancecui.active.com/new/events/57227451/select-race?_p=9778819554116866&e4q=b4c582fe-43bc-41b0-8df3-221750f7842b&e4p=98898649-9a90-47cc-a977-0197a099719b&e4ts=1538665644&e4c=active&e4e=snawe00000000&e4rt=Safetynet&e4h=a74b16f1d10ebeed229cf4c8311a6f08&_ga=2.193888045.1618800628.1549375348-1259773413.1541001577',
  });
  const wrapper = shallow(<StickyBanner {...mockData} />);

  wrapper.find(SignUpButton).forEach(button => {
    expect(button.prop('href')).toEqual(mockData.eventLink);
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
