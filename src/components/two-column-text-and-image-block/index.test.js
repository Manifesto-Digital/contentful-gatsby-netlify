import React from 'react';
import { shallow } from 'enzyme';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../__tests__/helpers/index';
import TwoColumnTextAndImageBlock from './index';
import { OuterContainer, TextWrapper, HeaderText } from './styles';
import {
  createFactory,
  createChildContentfulRichText,
  createImage,
} from '../../utils/test-factories';
import theme from '../theme/variables';

// Default props
export const createTwoColumnTextAndImageBlock = createFactory({
  headerText: 'Mock header',
  leftColumnText: createChildContentfulRichText(),
  rightColumnImage: createImage(),
  backgroundColour: 'White',
});

it('renders correctly', () => {
  const mockData = createTwoColumnTextAndImageBlock();

  snapshotComponent(<TwoColumnTextAndImageBlock data={mockData} />);
});

it('displays the correct header text', () => {
  const mockData = createTwoColumnTextAndImageBlock({
    headerText: 'Different header text',
  });

  const wrapper = shallow(<TwoColumnTextAndImageBlock data={mockData} />);
  expect(wrapper.find(HeaderText).text()).toBe(mockData.headerText);
});

it('displays the correct left column text', () => {
  const mockData = createTwoColumnTextAndImageBlock({
    leftColumnText: {
      childContentfulRichText: {
        html: 'Test left column text',
      },
    },
  });

  const wrapper = shallow(<TwoColumnTextAndImageBlock data={mockData} />);
  expect(wrapper.find(TextWrapper).prop('richText')).toBe(
    mockData.leftColumnText
  );
});

it('displays the correct theme colour', () => {
  const mockData = createTwoColumnTextAndImageBlock({
    backgroundColour: 'Grey',
  });

  const wrapper = mountWithTheme(
    <TwoColumnTextAndImageBlock data={mockData} />
  );
  expect(wrapper.find(OuterContainer)).toHaveStyleRule(
    'background-color',
    theme.palette.grey10
  );
});

it('Should display an image correctly', () => {
  const mockData = createTwoColumnTextAndImageBlock({
    rightColumnImage: {
      description: 'Collection hero',
      title: 'collection-hero',
      file: {
        url:
          '//images.ctfassets.net/6sxvmndnpn0s/2DPKnmx9Na8WYgG4ySqkA/5ca89770eb1ac36c9dbfe34d8d65eb5c/collection-hero.jpg',
        fileName: 'collection-hero.jpg',
      },
    },
  });

  const wrapper = mountWithTheme(
    <TwoColumnTextAndImageBlock data={mockData} />
  );
  expect(wrapper.find('img').prop('src')).toContain(
    mockData.rightColumnImage.file.url
  );
});
