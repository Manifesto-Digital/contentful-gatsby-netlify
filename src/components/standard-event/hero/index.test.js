import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { snapshotComponent } from 'test-helpers';
import {
  createFactory,
  createTestRef,
  createEvent,
} from '../../../utils/test-factories';
import EventHero from '.';
import { StyledButton, MapButton } from './styles';

// Default props
export const createEventHeroProps = createFactory({
  event: createEvent(),
  displayMap: true,
  mainCtaLink: 'http://example.com',
  mainCtaMethod: 'Form',
  mainCtaText: 'cta text',
  formRef: createTestRef(),
  toggleMapModal: () => {},
});

it('renders event hero correctly', () => {
  const mockData = createEventHeroProps();
  snapshotComponent(<EventHero {...mockData} />);
});

it('renders the event name as a header 1', () => {
  const event = createEvent({
    eventName: 'Amazing event',
  });
  const mockData = createEventHeroProps({ event });
  const wrapper = shallow(<EventHero {...mockData} />);
  expect(wrapper.find('h1').text()).toEqual(mockData.event.eventName);
});

it('cta button text is passed', () => {
  const event = createEvent({
    eventStatus: 'Open',
  });
  const mockData = createEventHeroProps({ event, mainCtaText: 'Open' });
  const wrapper = shallow(<EventHero {...mockData} />);

  expect(wrapper.find(StyledButton).text()).toEqual(mockData.mainCtaText);
});

it('cta button text overrides to sold out', () => {
  const event = createEvent({
    eventStatus: 'Sold Out',
  });
  const mockData = createEventHeroProps({ event, mainCtaText: 'Open' });
  const wrapper = shallow(<EventHero {...mockData} />);

  expect(wrapper.find(StyledButton).text()).toEqual('Sold Out');
});

it('trigger the show map function on click', () => {
  const mockCallback = jest.fn();
  const mockData = createEventHeroProps({ toggleMapModal: mockCallback });
  const wrapper = shallow(<EventHero {...mockData} />);

  act(() => {
    wrapper.find(MapButton).simulate('click');
  });
  expect(mockCallback).toBeCalled();
});
