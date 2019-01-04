import React from 'react'
import 'jest-styled-components'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import {
  createFactory,
  createChildContentfulRichText,
} from '../../utils/test-factories'
import InlineCallOut from './index'

// Default props
export const createInlineBanner = createFactory({
  content: createChildContentfulRichText(),
  icon: null,
  borderColour: null,
  bannerColour: null,
})

it('renders correctly with no options chosen in cms', () => {
  const mockData = createInlineBanner()
  const tree = renderWithTheme(<InlineCallOut content={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with icon chosen in cms', () => {
  const mockData = createInlineBanner({
    icon: 'Open book',
  })

  const tree = renderWithTheme(<InlineCallOut content={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})
