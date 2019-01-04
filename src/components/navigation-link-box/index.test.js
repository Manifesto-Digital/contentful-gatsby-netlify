import React from 'react'
import { shallow } from 'enzyme'
import { snapshotComponent } from '../../../__tests__/helpers/index'
import NavigationLinkBox from './index'
import { StyledLink } from './styles'
import { createFactory, createInternalLink } from '../../utils/test-factories'

// Default props
export const createNavigationLinkBox = createFactory({
  headerText: 'What an amazing banner',
  links: [
    createInternalLink(),
    createInternalLink(),
    createInternalLink(),
    createInternalLink(),
  ],
})

it('renders correctly', () => {
  const mockBanner = createNavigationLinkBox()

  snapshotComponent(<NavigationLinkBox data={mockBanner} />)
})

it('displays the correct header text', () => {
  const mockBanner = createNavigationLinkBox({ headerText: 'Test header text' })
  const wrapper = shallow(<NavigationLinkBox data={mockBanner} />)
  expect(wrapper.find('h2').text()).toBe(mockBanner.headerText)
})

it('displays link and title correctly', () => {
  const mockBanner = createNavigationLinkBox({
    link: [
      {
        title: 'Shelter Demo Page',
        slug: 'shelter-demo-page',
      },
    ],
  })
  const wrapper = shallow(<NavigationLinkBox data={mockBanner} />)

  expect(
    wrapper
      .find(StyledLink)
      .at(0)
      .text()
  ).toBe(mockBanner.links[0].title)

  expect(
    wrapper
      .find(StyledLink)
      .at(0)
      .prop('to')
  ).toBe(mockBanner.links[0].slug)
})
