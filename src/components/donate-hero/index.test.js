import React from 'react';
import Slider from 'rc-slider/lib/Slider';
import DonateHero from '.';
import { mountWithTheme, snapshotComponent } from '../../../__tests__/helpers';
import { StyledDonateButton, StyledCollapsableArea } from './styles';
import DonationForm from '../donation-banner/donation-form';

const createImage = (type, amount) => ({
  src: `${type}-${amount}-foo`,
  srcSet: `${type}-${amount}-foo 100w, ${type}-${amount}-bar 200w`,
  title: `Image for ${type} ${amount}`,
});

const createAmount = (type, amount) => ({
  image: createImage(type, amount),
  description: `Donate £${amount} ${type}.`,
});

const createTab = (type, defaultAmount) => ({
  defaultAmount,
  amounts: {
    1: createAmount(type, 1),
    2: createAmount(type, 2),
    3: createAmount(type, 3),
    4: createAmount(type, 4),
  },
});

const expectAmount = (wrapper, { value, description, image }) => {
  expect(wrapper.find('img').props()).toMatchObject(image);
  expect(wrapper.find(Slider).prop('value')).toBe(value);
  expect(wrapper.find(StyledDonateButton).text()).toBe(`Donate £${value}`);
  // REVIEW: Maybe make this more specific?
  expect(wrapper.text()).toEqual(expect.stringContaining(description));
};

describe('error handling', () => {
  it('errors if default amount is not valid (once)', () => {
    expect(() => {
      mountWithTheme(
        <DonateHero
          monthly={createTab('monthly', 3)}
          once={createTab('once', 10)}
        />
      );
    }).toThrowErrorMatchingInlineSnapshot(
      `"Invalid default once amount of £10. The default amount must correspond to one of the specified amounts."`
    );
  });

  it('errors if default amount is not valid (monthly)', () => {
    expect(() => {
      mountWithTheme(
        <DonateHero
          monthly={createTab('monthly', 10)}
          once={createTab('once', 3)}
        />
      );
    }).toThrowErrorMatchingInlineSnapshot(
      `"Invalid default monthly amount of £10. The default amount must correspond to one of the specified amounts."`
    );
  });
});

it('renders correctly', () => {
  snapshotComponent(
    <DonateHero monthly={createTab('monthly', 2)} once={createTab('once', 3)} />
  );
});

it('initially displays default single-payment amount, background image and description', () => {
  const wrapper = mountWithTheme(
    <DonateHero monthly={createTab('monthly', 2)} once={createTab('once', 3)} />
  );

  const expectedImage = createImage('once', 3);

  expectAmount(wrapper, {
    value: 3,
    description: 'Donate £3 once.',
    image: expectedImage,
  });
});

it('displays default monthly amount, background image and description when switching to monthly tab', () => {
  const wrapper = mountWithTheme(
    <DonateHero monthly={createTab('monthly', 2)} once={createTab('once', 3)} />
  );

  wrapper.find('li[children="Give monthly"]').simulate('click');

  const expectedImage = createImage('monthly', 2);

  expectAmount(wrapper, {
    value: 2,
    description: 'Donate £2 monthly.',
    image: expectedImage,
  });
});

it('switches background image and description when changing slider', () => {
  const wrapper = mountWithTheme(
    <DonateHero monthly={createTab('monthly', 2)} once={createTab('once', 3)} />
  );

  const expectedImage = createImage('once', 1);

  const onChange = wrapper.find(Slider).prop('onChange');

  onChange(1);

  wrapper.update();

  expectAmount(wrapper, {
    value: 1,
    description: 'Donate £1 once.',
    image: expectedImage,
  });
});

it('renders a donation form', () => {
  const wrapper = mountWithTheme(
    <DonateHero monthly={createTab('monthly', 2)} once={createTab('once', 3)} />
  );

  expect(wrapper.find(DonationForm)).toHaveLength(1);
});

it('starts with donation form collapsed', () => {
  const wrapper = mountWithTheme(
    <DonateHero monthly={createTab('monthly', 2)} once={createTab('once', 3)} />
  );

  expect(wrapper.find(StyledCollapsableArea).prop('collapsed')).toBe(true);
});

it('expands donation form when clicking "Choose your own amount"', () => {
  const wrapper = mountWithTheme(
    <DonateHero monthly={createTab('monthly', 2)} once={createTab('once', 3)} />
  );

  wrapper
    .find({ children: 'Choose your own amount' })
    .first()
    .simulate('click');

  expect(wrapper.find(StyledCollapsableArea).prop('collapsed')).toBe(false);
});

describe('submission', () => {
  it('submits default amount to correct url', () => {
    const wrapper = mountWithTheme(
      <DonateHero
        monthly={createTab('monthly', 2)}
        once={createTab('once', 3)}
      />
    );

    expect(wrapper.find(StyledDonateButton).getDOMNode()).toHaveProperty(
      'href',
      'https://donate.shelter.org.uk/?cid=263&amount=300&frequency=once'
    );
  });
});
