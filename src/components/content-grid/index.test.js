import React from 'react'
import 'jest-styled-components'
import { shallow, mount } from 'enzyme'
import {
  renderWithTheme,
  mountWithTheme,
} from '../../../__tests__/helpers/index'
import Grid from './index'
import { Item } from './styles'
import RichText from '../rich-text'
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
