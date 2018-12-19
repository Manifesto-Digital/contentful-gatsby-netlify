import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import CTABanner from './index'
import { Header } from './styles'
import theme from '../theme/variables'
import { createFactory } from '../../utils/test-factories'
import { createCTA } from '../cta/index.test'

// Default prop values
export const createCtaBanner = createFactory({
  cta: createCTA({ ctaColour: 'White Outline', internalLink: null }),
  bannerColour: 'Blue',
  headerText: 'mock header text',
})

it('renders correctly', () => {
  const mockData = createCtaBanner()

  const tree = renderWithTheme(
    <CTABanner
      cta={mockData.cta}
      bannerColour={mockData.bannerColour}
      headerText={mockData.headerText}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct header text', () => {
  const mockData = createCtaBanner({ headerText: 'Mock header text' })

  const wrapper = shallow(
    <CTABanner
      cta={mockData.cta}
      bannerColour={mockData.bannerColour}
      headerText={mockData.headerText}
    />
  )
  expect(wrapper.find(Header).text()).toBe(mockData.headerText)
})

it('changes background colour based on props', () => {
  const mockData = createCtaBanner({ bannerColour: 'Red' })

  const tree = renderWithTheme(
    <CTABanner
      cta={mockData.cta}
      bannerColour={mockData.bannerColour}
      headerText={mockData.headerText}
    />
  )
  expect(tree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.primary
  )

  const updatedMockData = createCtaBanner({ bannerColour: 'Black' })

  const changedTree = renderWithTheme(
    <CTABanner
      cta={updatedMockData.cta}
      bannerColour={updatedMockData.bannerColour}
      headerText={updatedMockData.headerText}
    />
  )
  expect(changedTree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.black
  )
})
