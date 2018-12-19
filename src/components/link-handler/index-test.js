import React from 'react'
import 'jest-styled-components'
import { Link } from 'gatsby'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import LinkHandler from './index'
import { getInternalLink } from '../../utils/links'
import { createFactory, createInternalLink } from '../../utils/test-factories'

// Default props
export const createLinkHandler = createFactory({
  text: 'Button text',
  externalUrl: 'https://example.com',
  internalLink: createInternalLink(),
})

it('renders correctly', () => {
  const mockData = createLinkHandler()

  const tree = renderWithTheme(
    <LinkHandler
      internalLink={mockData.internalLink}
      externalUrl={mockData.externalUrl}
    >
      {mockData.text}
    </LinkHandler>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct internal link', () => {
  const mockData = createLinkHandler()
  const wrapper = shallow(
    <LinkHandler
      internalLink={mockData.internalLink}
      externalUrl={mockData.externalUrl}
    >
      {mockData.text}
    </LinkHandler>
  )

  expect(wrapper.find(Link).prop('to')).toBe(
    getInternalLink(mockData.internalLink.slug)
  )
})

it('displays the external link', () => {
  const mockData = createLinkHandler({ internalLink: null })

  const wrapper = shallow(
    <LinkHandler
      internalLink={mockData.internalLink}
      externalUrl={mockData.externalUrl}
    >
      {mockData.text}
    </LinkHandler>
  )

  expect(wrapper.find('a').prop('href')).toBe(mockData.externalUrl)
})
