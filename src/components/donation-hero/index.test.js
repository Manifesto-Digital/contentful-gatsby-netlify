import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import { mountWithTheme, snapshotComponent } from 'test-helpers';
import {
  StyledDonateButton,
  CollapsableArea,
  OwnAmountButton,
  OwnAmountSubmit,
} from './styles';
import DonationForm from '../donation-form-handler';
import { createFactory, createImage } from '../../utils/test-factories';
import DonationHero from '.';

// Default props
export const createDonationHero = createFactory({
  heading: 'Your donations make a difference',
  singleAmount1: 10,
  singleDescription1:
    'Just £10 could pay for two web chats providing essential housing advice.',
  singleImage1: createImage(),
  singleAmount2: 20,
  singleDescription2:
    'Donating £20 could answer two urgent calls to our helpline.',
  singleImage2: createImage(),
  singleAmount3: 30,
  singleDescription3:
    'Giving £30 could pay for a face-to-face advice session with a Shelter adviser.',
  singleImage3: createImage(),
  singleAmount4: 50,
  singleDescription4:
    'Giving £50 could answer five urgent calls to our helpline.',
  singleImage4: createImage(),
  singleAmount5: 80,
  singleDescription5:
    'Donating £80 could help pay for legal advice that could help a family keep their home.',
  singleImage5: createImage(),
  monthlyAmount1: 5,
  monthlyDescription1:
    'Just £5 could pay for a web chat providing essential housing advice.',
  monthlyImage1: createImage(),
  monthlyAmount2: 10,
  monthlyDescription2:
    'Donating £10 can answer an urgent call to our helpline.',
  monthlyImage2: createImage(),
  monthlyAmount3: 15,
  monthlyDescription3:
    'Giving £15 could pay for three web chats providing essential housing advice.',
  monthlyImage3: createImage(),
  monthlyAmount4: 20,
  monthlyDescription4:
    'Donating £20 could help pay for a face-to-face advice session with a Shelter adviser.',
  monthlyImage4: createImage(),
});

const expectAmount = (wrapper, { value, description, image }) => {
  expect(wrapper.find('img').props().src).toContain(image.file.url);
  expect(wrapper.find(Slider).prop('value')).toBe(value);
  expect(wrapper.find(StyledDonateButton).text()).toContain(`Donate £${value}`);
  expect(
    wrapper.find('#donation-hero-form input[name="amount"]').props().value
  ).toEqual((value * 100).toString()); // Amount used in form submission (pence)
  expect(wrapper.text()).toContain(description);
};

it('renders correctly', () => {
  const mockData = createDonationHero();
  snapshotComponent(<DonationHero content={mockData} />);
});

it('initially displays 3rd single payment option', () => {
  const mockData = createDonationHero({
    singleAmount3: 35,
    singleDescription3: 'Mock singleDescription3 description',
    singleImage3: createImage({
      description: 'Collection hero',
      file: {
        url:
          '//images.ctfassets.net/6sxvmndnpn0s/2DPKnmx9Na8WYgG4ySqkA/5ca89770eb1ac36c9dbfe34d8d65eb5c/collection-hero.jpg',
      },
    }),
  });

  const wrapper = mountWithTheme(<DonationHero content={mockData} />);

  expectAmount(wrapper, {
    value: mockData.singleAmount3,
    description: mockData.singleDescription3,
    image: mockData.singleImage3,
  });
});

it('switches option values when changing slider', () => {
  const mockData = createDonationHero();
  const wrapper = mountWithTheme(<DonationHero content={mockData} />);

  // Defaults
  expectAmount(wrapper, {
    value: mockData.singleAmount3,
    description: mockData.singleDescription3,
    image: mockData.singleImage3,
  });

  const onChange = wrapper.find(Slider).prop('onChange');
  onChange(mockData.singleAmount5);

  wrapper.update();

  expectAmount(wrapper, {
    value: mockData.singleAmount5,
    description: mockData.singleDescription5,
    image: mockData.singleImage5,
  });
});

it('renders a donation form for the slider and a donation form for the other amount', () => {
  const mockData = createDonationHero();
  const wrapper = mountWithTheme(<DonationHero content={mockData} />);
  expect(wrapper.find(DonationForm)).toHaveLength(2);
});

it('starts with donation form collapsed', () => {
  const mockData = createDonationHero();
  const wrapper = mountWithTheme(<DonationHero content={mockData} />);
  expect(wrapper.find(CollapsableArea)).toHaveStyleRule('max-height', '0');
});

it('expands other amount donation form when clicking choosing to enter own amount', () => {
  const mockData = createDonationHero();
  const wrapper = mountWithTheme(<DonationHero content={mockData} />);

  wrapper.find(OwnAmountButton).simulate('click');

  expect(wrapper.find(CollapsableArea)).not.toHaveStyleRule('max-height', '0');
});

it('both forms have a button to submit', () => {
  const mockData = createDonationHero();
  const wrapper = mountWithTheme(<DonationHero content={mockData} />);

  expect(wrapper.find(StyledDonateButton)).toHaveLength(1);
  expect(wrapper.find(OwnAmountSubmit)).toHaveLength(1);
});
