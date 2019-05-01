import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'gatsby';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import LinkList from '.';
import {
  createFactory,
  createInternalRef,
  createFile,
} from '../../utils/test-factories';
import { hidePascalCaseWarning } from '../../utils/test-mocks';
import { mimeTypeToString } from '../../utils/content-formatting';
import { formatFilesize } from '../../utils/filesize-formatting';

export const createLinkList = createFactory({
  headerText: 'What an amazing banner',
  links: [
    createInternalRef({ title: 'Test Page Title' }),
    createInternalRef({ title: 'Test Page Title' }),
    createInternalRef({ title: 'Test Page Title' }),
    createInternalRef({ title: 'Test Page Title' }),
  ],
});

it('renders correctly', () => {
  const mockData = createLinkList();
  snapshotComponent(<LinkList {...mockData} />);
});

hidePascalCaseWarning();

it('displays the correct header text', () => {
  const mockData = createLinkList({
    headerText: 'Test header text',
  });
  const wrapper = shallow(<LinkList {...mockData} />);
  expect(wrapper.find('h2').text()).toBe(mockData.headerText);
});

it('displays links and title correctly', () => {
  const mockData = createLinkList({
    links: [
      createInternalRef({ slug: 'internal-slug-1', title: 'mockTitle 1' }),
      createInternalRef({ slug: 'internal-slug-2', title: 'mockTitle 2' }),
    ],
  });
  const wrapper = mountWithTheme(<LinkList {...mockData} />);

  mockData.links.forEach((link, i) => {
    expect(
      wrapper
        .find(Link)
        .at(i)
        .text()
    ).toBe(link.title);

    expect(
      wrapper
        .find(Link)
        .at(i)
        .prop('to')
    ).toContain(link.slug);
  });
});

it('renders a list of downloadable links if props passed', () => {
  const mockData = createLinkList({
    links: [createFile(), createFile()],
    downloads: true,
  });
  const wrapper = mountWithTheme(<LinkList {...mockData} />);

  mockData.links.forEach((link, i) => {
    // contains file size
    expect(
      wrapper
        .find('li')
        .at(i)
        .text()
    ).toContain(formatFilesize(link.file.details.size));
    // contains file type
    expect(
      wrapper
        .find('li')
        .at(i)
        .text()
    ).toContain(mimeTypeToString(link.file.contentType));
    // Contains title
    expect(
      wrapper
        .find('a')
        .at(i)
        .text()
    ).toContain(link.title);
    // file link
    expect(
      wrapper
        .find('a')
        .at(i)
        .prop('href')
    ).toContain(link.file.url);
  });
});
