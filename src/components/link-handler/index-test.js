import React from 'react'
import 'jest-styled-components'
import { Link } from 'gatsby'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import LinkHandler from './index'
import { getInternalLink } from '../../utils/links'

it('renders correctly', () => {
  const text = 'Button text'
  const externalUrl = 'https://example.com'
  const internalLink = { id: '12345', slug: 'slug' }

  const tree = renderWithTheme(
    <LinkHandler internalLink={internalLink} externalUrl={externalUrl}>
      {text}
    </LinkHandler>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct internal link', () => {
  const text = 'Button text'
  const externalUrl = 'https://example.com'
  const internalLink = { id: '12345', slug: 'slug' }

  const wrapper = shallow(
    <LinkHandler internalLink={internalLink} externalUrl={externalUrl}>
      {text}
    </LinkHandler>
  )

  expect(wrapper.find(Link).prop('to')).toBe(getInternalLink(internalLink.slug))
})

it('displays the external link', () => {
  const text = 'Button text'
  const externalUrl = 'https://example.com'
  const internalLink = null

  const wrapper = shallow(
    <LinkHandler internalLink={internalLink} externalUrl={externalUrl}>
      {text}
    </LinkHandler>
  )

  expect(wrapper.find('a').prop('href')).toBe(externalUrl)
})
