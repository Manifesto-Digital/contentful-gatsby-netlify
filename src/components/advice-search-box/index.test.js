import React from 'react'
import { shallow } from 'enzyme'
import { snapshotComponent } from '../../../__tests__/helpers/index'
import AdviceSearchBox from './index'
import { createFactory, createInternalLink } from '../../utils/test-factories'

// Default props
export const createNavigationLinkBox = createFactory({
  headerText: 'Search our housing advice',
  placeholder: 'Search topics',
})

it('renders correctly', () => {
  const mockData = createNavigationLinkBox()
  snapshotComponent(<AdviceSearchBox data={mockData} />)
})

it('displays the correct header text', () => {
  const mockData = createNavigationLinkBox({
    headerText: 'Search our housing advice',
  })
  const wrapper = shallow(<AdviceSearchBox data={mockData} />)
  expect(wrapper.find('h3').text()).toBe(mockData.headerText)
})

it('displays the correct placeholder text', () => {
  const mockData = createNavigationLinkBox({
    placeholder: 'Search topics',
  })
  const wrapper = shallow(<AdviceSearchBox data={mockData} />)
  expect(wrapper.find('input').prop('placeholder')).toBe(mockData.placeholder)
})
