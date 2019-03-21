import React from 'react';
import 'jest-styled-components';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import {
  createHeaderNavigation,
  createInternalRef,
} from '../../../utils/test-factories';
import Navigation from '.';
import NavigationMenu from './navigation';
import { MobileMenuClose, SubNavButton } from './styles-icons';
import { ItemLink, SubMenu } from './styles';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';

it('Renders correctly', () => {
  const mockData = createHeaderNavigation();
  snapshotComponent(<Navigation pageData={mockData} active />);
});

hidePascalCaseWarning();

it('Displays close button', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(<Navigation pageData={mockData} active />);
  expect(wrapper.find(MobileMenuClose)).toHaveLength(1);
});

test('Should populate a menu item correctly', () => {
  const mockData = createHeaderNavigation({
    id: 'e230d8b8-4ee6-5d4c-bf25-57af664d12d7',
    menuLabel: 'What we do',
    navigationLink: [createInternalRef({ title: 'title' })],
  });
  const wrapper = mountWithTheme(
    <NavigationMenu pageData={mockData} id={mockData.id} />
  );

  expect(
    wrapper
      .find(ItemLink)
      .at(0)
      .text()
  ).toBe(mockData.menuLabel || mockData.navigationLink[0].title);

  expect(
    wrapper
      .find(ItemLink)
      .at(0)
      .props().internalLink
  ).toBe(mockData.navigationLink[0]);
});

test('Should populate a sub-menu', () => {
  const mockData = createHeaderNavigation({
    id: 'e230d8b8-4ee6-5d4c-bf25-57af664d12d7',
    subNavigationItems: [
      {
        slug: '320,000-people-in-britain-are-now-homeless',
        title: '320,000 people in Britain are now homeless',
      },
      {
        title: 'Shelter Manchester to hold vigil for lost homeless people',
        slug: 'shelter-manchester-to-hold-vigil-for-lost-homeless-people',
      },
    ],
  });
  const wrapper = mountWithTheme(
    <NavigationMenu pageData={mockData} id={mockData.id} />
  );

  expect(wrapper.find(ItemLink)).toHaveLength(
    mockData.subNavigationItems.length
  );
});

it('Opens a sub-navigation on button click', () => {
  const mockData = createHeaderNavigation({
    navigationItems: [
      {
        id: 'd582da1f-1f7f-5f4c-ae3b-ef2b41972dbc',
        menuLabel: 'Housing Advice',
        navigationLink: [{ title: 'Tobys Page', slug: 'tobys-page' }],
        subNavigationItems: [
          {
            slug: '320,000-people-in-britain-are-now-homeless',
            title: '320,000 people in Britain are now homeless',
          },
          {
            title: 'Tobys Page',
            slug: 'tobys-page',
          },
          {
            title: 'Shelter Manchester to hold vigil for lost homeless people',
            slug: 'shelter-manchester-to-hold-vigil-for-lost-homeless-people',
          },
          {
            title: 'Shelter Demo Page',
            slug: 'shelter-demo-page',
          },
        ],
      },
    ],
  });

  const wrapper = mountWithTheme(<Navigation pageData={mockData} active />);
  const mockButton = wrapper.find(SubNavButton);

  mockButton.simulate('click');
  expect(wrapper.find(SubMenu)).toHaveStyleRule('display', 'flex');
});
