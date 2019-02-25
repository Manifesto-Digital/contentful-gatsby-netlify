import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import {
  snapshotComponent,
  mountWithTheme,
} from '../../../../__tests__/helpers';
import { createFactory, createImage } from '../../../utils/test-factories';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';
import Item from '.';

const createLongText = createFactory({
  internal: {
    content:
      'Nam commodo suscipit quam. Etiam iaculis nunc ac metus. Ut a nisl id ante tempus hendrerit. Etiam ultricies nisi vel augue. Donec mollis hendrerit risus. Nam commodo suscipit quam. Etiam iaculis nunc ac metus. Ut a nisl id ante tempus hendrerit. Etiam ultricies nisi vel augue. Donec mollis hendrerit risus.',
  },
});

const createPageInformation = createFactory({
  id: '757523f4-e8bb-5aac-82c7-cb08699554c0',
  pageThumbnail: createImage(),
  shortDescription: createLongText(),
  longDescription: createLongText(),
  seoDescription: createLongText(),
  seoTitle:
    '320,000 people in Britain are now homeless, as numbers keep rising',
  title: '320,000 people in Britain are now homeless, as numbers keep rising',
});
const createItem = createFactory({
  id: '70e53e54-dd49-5357-87ed-6f76611e510d',
  title: '320,000 people in Britain are now homeless, as numbers keep rising',
  slug: 'test-slug',
  datePosted: '2018-05-16',
  pageInformation: createPageInformation(),
});

it('renders correctly', () => {
  const mockData = createItem();
  snapshotComponent(<Item data={mockData} />);
});

it('renders the correct header', () => {
  const mockData = createItem({
    pressRelease: {
      title: 'new title',
      id: '70e53e54-dd49-5357-87ed-6f76611e510d',
      slug: 'test-slug',
      datePosted: '2018-05-16',
      pageInformation: createPageInformation(),
    },
  });

  const wrapper = shallow(<Item data={mockData} />);
  expect(wrapper.find('h3').text()).toEqual(mockData.title);
});

hidePascalCaseWarning();
it('renders a link', () => {
  const mockData = createItem({
    title: 'new title',
    id: '70e53e54-dd49-5357-87ed-6f76611e510d',
    slug: 'test-slug',
    datePosted: '2018-05-16',
    pageInformation: createPageInformation(),
  });
  const wrapper = mountWithTheme(<Item data={mockData} />);
  expect(wrapper.find(Link)).toHaveLength(1);
});
