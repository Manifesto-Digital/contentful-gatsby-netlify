import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import {
  renderWithTheme,
  mountWithTheme,
} from '../../../__tests__/helpers/index'
import Hero from './index'
import { Title, Subtitle } from './styles'

it('renders correctly', () => {
  const mockData = {
    title: 'Mock Title',
    subtitle: 'Mock Subtitle',
    blackText: true,
    image: global.__IMAGE_MOCK,
  }

  const tree = renderWithTheme(<Hero content={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct title', () => {
  const mockData = {
    title: 'Mock Title',
    subtitle: 'Mock Subtitle',
    blackText: true,
    image: global.__IMAGE_MOCK,
  }

  const wrapper = shallow(<Hero content={mockData} />)
  expect(wrapper.find(Title).text()).toBe(mockData.title)
})

it('displays the correct subtitle', () => {
  const mockData = {
    title: 'Mock Title',
    subtitle: 'Mock Subtitle',
    blackText: true,
    image: global.__IMAGE_MOCK,
  }

  const wrapper = shallow(<Hero content={mockData} />)
  expect(wrapper.find(Subtitle).text()).toBe(mockData.subtitle)
})

it('renders an image', () => {
  const mockData = {
    title: 'Mock Title',
    subtitle: 'Mock Subtitle',
    blackText: true,
    image: global.__IMAGE_MOCK,
  }

  const wrapper = mountWithTheme(<Hero content={mockData} />)
  expect(wrapper.find('img')).toHaveLength(1)
})
