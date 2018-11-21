import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import CTABanner from './index'
import { Header } from './styles'
import theme from '../theme/variables'

it('renders correctly', () => {
  const cta = {
    ctaColour: 'White Outline',
    name: 'Demo CTA Button',
    internalLink: null,
    externalUrl: 'https://www.google.com',
    buttonText: 'Click me',
  }
  const bannerColour = 'Blue'
  const headerText = 'mock header text'

  const tree = renderWithTheme(
    <CTABanner cta={cta} bannerColour={bannerColour} headerText={headerText} />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct header text', () => {
  const cta = {
    ctaColour: 'Blue',
    name: 'Demo CTA Button',
    internalLink: null,
    externalUrl: 'https://www.google.com',
    buttonText: 'Click me',
  }
  const bannerColour = 'Red'
  const headerText = 'mock header text'

  const wrapper = shallow(
    <CTABanner cta={cta} bannerColour={bannerColour} headerText={headerText} />
  )
  expect(wrapper.find(Header).text()).toBe(headerText)
})

it('changes background colour based on props', () => {
  const cta = {
    ctaColour: 'Blue',
    name: 'Demo CTA Button',
    internalLink: null,
    externalUrl: 'https://www.google.com',
    buttonText: 'Click me',
  }
  const bannerColour = 'Red'
  const headerText = 'mock header text'

  const tree = renderWithTheme(
    <CTABanner cta={cta} bannerColour={bannerColour} headerText={headerText} />
  )
  expect(tree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.primary
  )

  const changedBannerColour = 'Black'

  const changedTree = renderWithTheme(
    <CTABanner
      cta={cta}
      bannerColour={changedBannerColour}
      headerText={headerText}
    />
  )
  expect(changedTree.toJSON()).toHaveStyleRule(
    'background-color',
    theme.palette.black
  )
})
