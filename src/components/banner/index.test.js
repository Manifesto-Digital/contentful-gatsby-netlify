import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent, renderWithTheme } from 'test-helpers';
import Banner from './index';
import { Header } from './styles';
import theme from '../theme/variables';
import { createFactory, createInternalLink } from '../../utils/test-factories';

// Default props
export const createBanner = createFactory({
  headerText: 'What an amazing banner',
  linkText: 'woooo this is a link',
  bannerColour: 'Red',
  externalLink: {
    URL: 'http://google.com',
    newTab: true,
  },
  internalLink: createInternalLink(),
});

it('renders correctly', () => {
  const mockBanner = createBanner();

  snapshotComponent(<Banner banner={mockBanner} />);
});

it('displays the correct header text', () => {
  const mockBanner = createBanner({ headerText: 'Test header text' });
  const wrapper = shallow(<Banner banner={mockBanner} />);
  expect(wrapper.find(Header).text()).toBe(mockBanner.headerText);
});

it('changes background colour based on props', () => {
  const mockBanner = createBanner({ bannerColour: 'Red' });

  const tree = renderWithTheme(<Banner banner={mockBanner} />);
  expect(tree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.primary
  );

  // Update prop value of the background banner colour and check this is reflected
  const changedMock = createBanner({ bannerColour: 'San Marino Blue' });

  const changedTree = renderWithTheme(<Banner banner={changedMock} />);
  expect(changedTree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.sanMarinoBlue
  );
});
