import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import { mountWithTheme, snapshotComponent } from 'test-helpers';
import VideoHero from '.';
import {
  createFactory,
  createImage,
  createVideo,
  createExternalRef,
} from '../../../utils/test-factories';
import { Title, Video, ImageFallback } from './styles';

// Default props
export const createHeroVideo = createFactory({
  title: 'Urban Rush',
  subtitle: 'London',
  image: createImage(),
  video: createVideo(),
  buttonText: 'Button text',
  bannerText: '15 MILES\nLONDON\n06 OCT 2019',
  eventLink: createExternalRef(),
});

jest.mock('react-player', () => 'React-player');

it('renders correctly', () => {
  const mockData = createHeroVideo();
  snapshotComponent(<VideoHero {...mockData} />);
});

it('title is rendered', () => {
  const mockData = createHeroVideo({
    title: 'Urban Rush',
  });
  const wrapper = shallow(<VideoHero {...mockData} />);
  expect(wrapper.find(Title).text()).toEqual(mockData.title);
});

it('includes a link to the event', () => {
  const mockData = createHeroVideo({
    eventLink: createExternalRef({
      newTab: true,
      URL:
        'https://endurancecui.active.com/new/events/57227451/select-race?_p=9778819554116866&e4q=b4c582fe-43bc-41b0-8df3-221750f7842b&e4p=98898649-9a90-47cc-a977-0197a099719b&e4ts=1538665644&e4c=active&e4e=snawe00000000&e4rt=Safetynet&e4h=a74b16f1d10ebeed229cf4c8311a6f08&_ga=2.193888045.1618800628.1549375348-1259773413.1541001577',
    }),
  });

  const wrapper = mountWithTheme(<VideoHero {...mockData} />);

  expect(wrapper.find('a').prop('href')).toEqual(mockData.eventLink.URL);
});

it('renders an image fallback if there is an error loading the video', () => {
  const mockData = createHeroVideo({
    title: 'Urban Rush',
  });
  const wrapper = mountWithTheme(<VideoHero {...mockData} />);

  act(() => {
    wrapper.find(Video).prop('onReady')();
  });
  wrapper.update();

  expect(wrapper.find(ImageFallback)).toHaveLength(0);

  act(() => {
    wrapper
      .find(Video)
      .simulate('error', { target: { error: 'Error has occurred' } });
  });

  wrapper.update();

  expect(wrapper.find(ImageFallback)).toHaveLength(1);
});
