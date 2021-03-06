import React from 'react';
import { shallow } from 'enzyme';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import QuotationWithImage from './index';
import { QuoteImage } from './styles';
import { createFactory, createImage } from '../../utils/test-factories';

// Default props
export const createPersonAssemblyWithQuoteAndImage = createFactory({
  quote: 'My quote',
  image: createImage(),
  insideContainer: true,
});

it('renders correctly', () => {
  const mockDataWithImageAndQuote = createPersonAssemblyWithQuoteAndImage();
  snapshotComponent(<QuotationWithImage {...mockDataWithImageAndQuote} />);
});

it('contains the quote I expect', () => {
  const mockDataWithImageAndQuote = createPersonAssemblyWithQuoteAndImage();
  const wrapper = mountWithTheme(
    <QuotationWithImage {...mockDataWithImageAndQuote} />
  );
  expect(wrapper.find('blockquote').text()).toContain(
    mockDataWithImageAndQuote.quote
  );
});

it('contains the QuoteImage I expect with quote', () => {
  const mockDataWithImageAndQuote = createPersonAssemblyWithQuoteAndImage({
    image: {
      description: 'mock',
      file: {
        url:
          '//images.ctfassets.net/6sxvmndnpn0s/2DPKnmx9Na8WYgG4ySqkA/5ca89770eb1ac36c9dbfe34d8d65eb5c/collection-hero.jpg',
        fileName: 'collection-hero.jpg',
        contentType: 'image/jpeg',
      },
    },
  });
  const wrapper = shallow(
    <QuotationWithImage {...mockDataWithImageAndQuote} />
  );
  expect(wrapper.find(QuoteImage).prop('image')).toEqual(
    mockDataWithImageAndQuote.image
  );
  expect(wrapper.find(QuoteImage).prop('image')).toEqual(
    mockDataWithImageAndQuote.image
  );
});
