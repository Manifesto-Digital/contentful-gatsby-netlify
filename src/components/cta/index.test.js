import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import CTA from './index'
import { ButtonLink } from './styles'
import { getInternalLink } from '../../utils/links'

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
    internalLink: { id: '12345', slug: 'slug' },
    externalUrl: 'http://example.com',
  }
  const wrapper = shallow(<CTA cta={mockData} />)
  expect(wrapper.find(ButtonLink).text()).toBe(mockData.buttonText)
})

it('displays the external link', () => {
  const mockData = {
    buttonText: 'Button text',
    ctaColour: 'Red',
    internalLink: null,
    externalUrl: 'http://example.com',
  }
  const wrapper = shallow(<CTA cta={mockData} />)

  expect(wrapper.find(ButtonLink).prop('href')).toBe(mockData.externalUrl)
})

it('displays the correct internal link', () => {
  const mockData = {
    buttonText: 'Button text',
    ctaColour: 'Red',
    internalLink: { id: '12345', slug: 'slug' },
    externalUrl: null,
  }
  const wrapper = shallow(<CTA cta={mockData} />)

  expect(wrapper.find(ButtonLink).prop('href')).toBe(
    getInternalLink(mockData.internalLink.slug)
  )
})

it('prioritises internal links over external', () => {
  const mockData = {
    buttonText: 'Button text',
    ctaColour: 'Red',
    internalLink: { id: '12345', slug: 'slug' },
    externalUrl: 'http://example.com',
  }
  const wrapper = shallow(<CTA cta={mockData} />)

  expect(wrapper.find(ButtonLink).prop('href')).toBe(
    getInternalLink(mockData.internalLink.slug)
  )
})
