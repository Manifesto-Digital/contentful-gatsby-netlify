import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import Grid from './index'
import { Item } from './styles'
import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories'

// Default props
export const createContentGrid = createFactory({
  grid1: createChildContentfulRichText(),
  grid2: createChildContentfulRichText(),
  grid3: createChildContentfulRichText(),
  grid4: createChildContentfulRichText(),
})

it('renders correctly', () => {
  const mockData = createContentGrid()

  const tree = renderWithTheme(<Grid content={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('only renders items that have content', () => {
  const mockData = createContentGrid({
    grid2: {
      childContentfulRichText: {
        html: '<p></p>',
      },
    },
    grid3: null,
    grid4: null,
  })

  const wrapper = shallow(<Grid content={mockData} />)
  expect(wrapper.find(Item)).toHaveLength(1)
})
