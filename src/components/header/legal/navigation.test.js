import React from 'react';
import 'jest-styled-components';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import {
  createHeaderNavigation,
  createInternalRef,
} from '../../../utils/test-factories';
import LegalNavigation from './navigation';
import NavigationMenuItem from '../navigation/menu-item';
import { MobileMenuClose, SubNavButton } from '../navigation/styles-icons';
import { ItemLink, SubMenuUl } from '../navigation/styles';
import { hidePascalCaseWarning } from '../../../utils/test-mocks';

it('Renders correctly', () => {
  const mockData = createHeaderNavigation({ acitve: false });
  snapshotComponent(
    <LegalNavigation navigationItems={mockData.navigationItems} active />
  );
});

hidePascalCaseWarning();

it('Displays close button', () => {
  const mockData = createHeaderNavigation();
  const wrapper = mountWithTheme(
    <LegalNavigation navigationItems={mockData.navigationItems} active />
  );
  expect(wrapper.find(MobileMenuClose)).toHaveLength(1);
});

test('Should populate a menu item correctly', () => {
  const mockMenuItem = {
    id: 'e230d8b8-4ee6-5d4c-bf25-57af664d12d7',
    menuLabel: 'What we do',
    navigationLink: [createInternalRef({ title: 'title' })],
  };

  const wrapper = mountWithTheme(
    <NavigationMenuItem menuItem={mockMenuItem} id={mockMenuItem.id} />
  );

  expect(
    wrapper
      .find(ItemLink)
      .at(0)
      .text()
  ).toBe(mockMenuItem.menuLabel);

  expect(
    wrapper
      .find(ItemLink)
      .at(0)
      .props().internalLink
  ).toBe(mockMenuItem.navigationLink[0]);
});

test('Should populate a menu', () => {
  const mockData = createHeaderNavigation({
    id: 'e230d8b8-4ee6-5d4c-bf25-57af664d12d7',
    navigationItems: [
      {
        id: 'd582da1f-1f7f-5f4c-ae3b-ef2b41972dbc',
        menuLabel: 'Label 1',
        navigationLink: [
          {
            title: 'Test Page ',
            slug: 'Test-page',
          },
        ],
      },
      {
        id: 'd582da1f-1f7f-5f4c-ae3b-ef2b41972dbc',
        menuLabel: 'Label 2',
        navigationLink: [
          {
            title: 'Test Page ',
            slug: 'Test-page',
          },
        ],
      },
    ],
    additionalLink: null,
  });
  const wrapper = mountWithTheme(
    <LegalNavigation
      navigationItems={mockData.navigationItems}
      active={false}
      id={mockData.id}
    />
  );

  expect(wrapper.find(ItemLink)).toHaveLength(
    mockData.navigationItems.length + 1
  ); // Scotland link
});

it('Opens a sub-navigation on button click', () => {
  const mockData = createHeaderNavigation({
    navigationItems: [
      {
        id: 'd582da1f-1f7f-5f4c-ae3b-ef2b41972dbc',
        menuLabel: 'Housing Advice',
        navigationLink: [{ title: 'test Page', slug: 'test-page' }],
        childNavigationItems: [
          {
            slug: '320,000-people-in-britain-are-now-homeless',
            title: '320,000 people in Britain are now homeless',
          },
          {
            title: 'test Page',
            slug: 'test-page',
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

  const wrapper = mountWithTheme(
    <LegalNavigation navigationItems={mockData.navigationItems} active />
  );
  const mockButton = wrapper.find(SubNavButton);

  mockButton.simulate('click');
  expect(wrapper.find(SubMenuUl)).toHaveStyleRule('display', 'flex');
});
