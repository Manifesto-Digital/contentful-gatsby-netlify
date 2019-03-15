import React from 'react';
import 'jest-styled-components';
import { snapshotComponent, mountWithTheme } from 'test-helpers';
import { createHeaderNavigation } from '../../utils/test-factories';
import { PureFooter } from './index';
import { ItemLink } from './styles';
import { hidePascalCaseWarning } from '../../utils/test-mocks';

it('Renders correctly', () => {
  const mockData = createHeaderNavigation();
  snapshotComponent(<PureFooter pageData={mockData} />);
});

hidePascalCaseWarning();

test('Should populate a menu item correctly', () => {
  const mockData = createHeaderNavigation({
    menuLabel: 'Housing Advice',
    navigationLink: [{ slug: 'tobys-page', title: 'Tobys Page' }],
  });
  const wrapper = mountWithTheme(<PureFooter pageData={mockData} />);

  expect(
    wrapper
      .find(ItemLink)
      .at(0)
      .text()
  ).toEqual(mockData.menuLabel || mockData.navigationLink[0].title);

  expect(
    wrapper
      .find(ItemLink)
      .at(0)
      .props().internalLink
  ).toEqual(mockData.navigationLink[0]);
});
