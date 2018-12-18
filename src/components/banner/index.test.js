import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import Banner from './index'
import { Header } from './styles'
import theme from '../theme/variables'

it('renders correctly', () => {
  const mockBanner = {
    headerText: 'What an amazing banner',
    linkText: 'woooo this is a link',
    bannerColour: 'Red',
    externalUrl: 'http://google.com',
    internalLink: {
      id: 'ee6c2ca6-54d8-5c26-bbff-7dafdaa823e3',
      slug: 'content-grid-check',
      internal: {
        type: 'ContentfulPageAssemblyContentPage',
      },
    },
  }

  const tree = renderWithTheme(<Banner banner={mockBanner} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct header text', () => {
  const mockBanner = {
    headerText: 'What an amazing banner',
    linkText: 'woooo this is a link',
    bannerColour: 'Red',
    externalUrl: 'http://google.com',
    internalLink: {
      id: 'ee6c2ca6-54d8-5c26-bbff-7dafdaa823e3',
      slug: 'content-grid-check',
      internal: { type: 'ContentfulPageAssemblyContentPage' },
    },
  }

  const wrapper = shallow(<Banner banner={mockBanner} />)
  expect(wrapper.find(Header).text()).toBe(mockBanner.headerText)
})

it('changes background colour based on props', () => {
  const mockBanner = {
    headerText: 'What an amazing banner',
    linkText: 'woooo this is a link',
    bannerColour: 'Red',
    externalUrl: 'http://google.com',
    internalLink: {
      id: 'ee6c2ca6-54d8-5c26-bbff-7dafdaa823e3',
      slug: 'content-grid-check',
      internal: { type: 'ContentfulPageAssemblyContentPage' },
    },
  }

  const tree = renderWithTheme(<Banner banner={mockBanner} />)
  expect(tree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.primary
  )

  mockBanner.bannerColour = 'Green'

  const changedTree = renderWithTheme(<Banner banner={mockBanner} />)
  expect(changedTree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.donate
  )
})
