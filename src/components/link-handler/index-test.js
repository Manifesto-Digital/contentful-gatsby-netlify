import React from 'react';
import { Link } from 'gatsby';
import { shallow } from 'enzyme';
import { snapshotComponent } from 'test-helpers';
import LinkHandler from './index';
import {
  createFactory,
  createExternalRef,
  createInternalRef,
} from '../../utils/test-factories';

// Default props
export const createLinkHandler = createFactory({
  text: 'Button text',
  link: createInternalRef(),
});

it('renders correctly', () => {
  const mockData = createLinkHandler();

  snapshotComponent(<LinkHandler {...mockData}>{mockData.text}</LinkHandler>);
});

it('displays the correct internal link', () => {
  const mockData = createLinkHandler({
    link: createInternalRef({ slug: 'internal-slug' }),
  });
  const wrapper = shallow(
    <LinkHandler link={mockData.link}>{mockData.text}</LinkHandler>
  );

  expect(wrapper.find(Link).prop('to')).toBe(`/${mockData.link.slug}`);
});

it('displays the external link', () => {
  const mockData = createLinkHandler({
    link: createExternalRef(),
  });

  const wrapper = shallow(
    <LinkHandler link={createExternalRef({ url: 'http://test.com' })}>
      {mockData.text}
    </LinkHandler>
  );

  expect(wrapper.find('a').prop('href')).toBe(mockData.link.URL);
});
