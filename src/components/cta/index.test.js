import React from 'react'
import 'jest-styled-components'
import {
  renderWithTheme,
  mountWithTheme,
} from '../../../__tests__/helpers/index'
import CTA from './index'
import LinkHandler from '../link-handler'

it('renders correctly', () => {
  const mockData = {
    buttonText: 'Button text',
    ctaColour: 'Red',
    internalLink: {
      id: '12345',
      slug: 'slug',
    },
    externalUrl: 'http://example.com',
  }

  const tree = renderWithTheme(<CTA cta={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct text', () => {
  const mockData = {
    buttonText: 'Button text',
    ctaColour: 'Red',
    internalLink: null,
    externalUrl: 'http://example.com',
  }
  const wrapper = mountWithTheme(<CTA cta={mockData} />)
  expect(wrapper.find(LinkHandler).text()).toBe(mockData.buttonText)
})
